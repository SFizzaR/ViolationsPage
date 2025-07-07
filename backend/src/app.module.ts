import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViolationsModule } from './violations/violations.module';
import { Violation } from './violations/entities/violation.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, //default port 
      username: 'root',
      password: 'Internship18@',
      database: 'nestjs_mysql',
      entities: [Violation, User],
      synchronize: true,
    }),
    ViolationsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
