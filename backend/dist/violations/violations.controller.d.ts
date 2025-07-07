import { ViolationsService } from './violations.service';
import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { Violation } from './entities/violation.entity';
export declare class ViolationsController {
    private readonly violationsService;
    constructor(violationsService: ViolationsService);
    create(createViolationDto: CreateViolationDto): Promise<Violation>;
    filter(startDate?: string, endDate?: string, violationNum?: number, vehicleNum?: string): Promise<Violation[]>;
    search(vehicleNum: string): Promise<Violation[]>;
    findAll(): Promise<Violation[]>;
    update(id: string, updateViolationDto: UpdateViolationDto): string;
    remove(id: string): string;
}
