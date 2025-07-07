import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { Violation } from './entities/violation.entity';
import { Repository, DataSource } from 'typeorm';
export declare class ViolationsService {
    private violationRepository;
    private dataSource;
    constructor(violationRepository: Repository<Violation>, dataSource: DataSource);
    create(createViolationDto: CreateViolationDto): Promise<Violation>;
    filter(startDate?: Date, endDate?: Date, violationNum?: number, vehicleNum?: string): Promise<Violation[]>;
    search(vehicleNum: string): Promise<Violation[]>;
    findAll(): Promise<Violation[]>;
    update(id: number, updateViolationDto: UpdateViolationDto): string;
    remove(id: number): string;
}
