import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  validateEmail(email: string) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  async create(createUserDto: CreateUserDto) {
    var response = {
      statuscode: 200,
      message: ''
    };
    try {
      if (createUserDto?.Email && createUserDto.Email != '' && this.validateEmail(createUserDto.Email)) {
        const userExisted = await this.userRepository.findOne({ where: { Email: createUserDto.Email } });
        if (userExisted) {
          response.message = 'User With this EmailAddress already Existed';
        }

        else {
          const hashedPassword = await bcrypt.hash(createUserDto.Password, 10);
          createUserDto.Password = hashedPassword;
          const newUser = this.userRepository.create(createUserDto);
          this.userRepository.save(newUser);
          response.message = "User Created SuccessFully";
        }

      } else {
        response.message = 'Please Provide Valid Emailaddress';

      }
      return response;

    } catch (ex) {
      response.statuscode = 400;
      response.message = ex.toString();
      return response;
    }
  }

  async Login(loginUserDto: LoginUserDto) {
    var response = {
      statuscode: 200,
      message: '',
      username: ''
    };
    try {
      if (loginUserDto?.Email && loginUserDto.Email != '' && this.validateEmail(loginUserDto.Email)) {
        const userExists = await this.userRepository.findOne({ where: { Email: loginUserDto.Email } });

        if (!userExists) {
          response.message = "Invalid user"
        }
        else {
          const isPasswordValid = await bcrypt.compare(loginUserDto.Password, userExists.Password);

          if (isPasswordValid) {
            response.message = "Log In successful"
            response.username = userExists.Username
          }
          else {
            response.message = 'Invalid Password'
          }
        }
      }
      else {
        response.message = 'Invalid Email'
      }
      return response
    }
    catch (ex) {
      response.statuscode = 500
      response.message = ex.toString()
      return response
    }
  }
  findAll() {

    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
