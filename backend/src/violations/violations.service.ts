import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { Violation } from './entities/violation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

const violationTypes = {
  1: "Harsh Braking",
  2: "Overspeeding",
  3: "Multiple Violations",
  4: "Nighttime Driving",
  5: "Continuous Violations"
}
@Injectable()
export class ViolationsService {

  constructor(
    @InjectRepository(Violation)
    private violationRepository: Repository<Violation>,
    private dataSource: DataSource
  ) { }


  async create(createViolationDto: CreateViolationDto): Promise<Violation> {
    const { violationNum } = createViolationDto
    const violationType = violationTypes[violationNum];
    if (!violationType) {
      throw new BadRequestException("Invalid violation Number");
    }
    const newViolation = this.violationRepository.create({
      ...createViolationDto,
      violationType
    });
    return this.violationRepository.save(newViolation);
  }

  async filter(
    startDate?: Date,
    endDate?: Date,
    violationNum?: number,
    vehicleNum?: string): Promise<Violation[]> {//[] means returns array
    if (!startDate && !endDate && !violationNum && !vehicleNum) {
      return this.violationRepository.find();
    }
    let textquery = `select * from violation `;
    const params: any[] = [];
    let whereAdded = false
    //const query = this.violationRepository.createQueryBuilder('violation')
    if (startDate && endDate) {
      textquery += `where dateTime between ? AND ?`
      params.push(new Date(startDate), new Date(endDate))
      whereAdded = true;
      // query.where('violation.dateTime BETWEEN :start AND :end', {
      //   start: new Date(startDate),
      //   end: new Date(endDate),
      // })
    }
    if (violationNum) {
      textquery += whereAdded ? `and violationNum = ?` : `where violationNum = ?`
      params.push(violationNum)
      whereAdded = true
      //query.andWhere('violation.violationNum = :violationNum', { violationNum });
    }
    if (vehicleNum) {
      textquery += whereAdded ? `and LOWER(vehicleNum) LIKE ?` : `where LOWER(vehicleNum) LIKE ?`
      params.push(`%${vehicleNum?.toLowerCase()}%`)
    }
    console.log('Query:', textquery);
    console.log('Params:', params);

    return this.dataSource.query(textquery, params);

    //query.getMany()
  }

  async search(vehicleNum: string): Promise<Violation[]> {
    return this.violationRepository.createQueryBuilder('violation').where('LOWER(violation.vehicleNum) LIKE :vehicleNum',
      { vehicleNum: `%${vehicleNum.toLowerCase()}%` }
    ).getMany();
  }

  async findAll(): Promise<Violation[]> {
    return this.violationRepository.find();
  }

  update(id: number, updateViolationDto: UpdateViolationDto) {
    return `This action updates a #${id} violation`;
  }

  remove(id: number) {
    return `This action removes a #${id} violation`;
  }
}
