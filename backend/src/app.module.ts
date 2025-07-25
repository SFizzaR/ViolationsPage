import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViolationsModule } from './violations/violations.module';
import { Violation } from './violations/entities/violation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, //default port 
      username: 'root',
      password: 'Internship18@',
      database: 'nestjs_mysql',
      entities: [Violation],
      synchronize: true,
    }),
    ViolationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
