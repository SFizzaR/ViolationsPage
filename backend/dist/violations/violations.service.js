"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViolationsService = void 0;
const common_1 = require("@nestjs/common");
const violation_entity_1 = require("./entities/violation.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const violationTypes = {
    1: "Harsh Braking",
    2: "Overspeeding",
    3: "Multiple Violations",
    4: "Nighttime Driving",
    5: "Continuous Violations"
};
let ViolationsService = class ViolationsService {
    violationRepository;
    dataSource;
    constructor(violationRepository, dataSource) {
        this.violationRepository = violationRepository;
        this.dataSource = dataSource;
    }
    async create(createViolationDto) {
        const { violationNum } = createViolationDto;
        const violationType = violationTypes[violationNum];
        if (!violationType) {
            throw new common_1.BadRequestException("Invalid violation Number");
        }
        const newViolation = this.violationRepository.create({
            ...createViolationDto,
            violationType
        });
        return this.violationRepository.save(newViolation);
    }
    async filter(startDate, endDate, violationNum, vehicleNum) {
        if (!startDate && !endDate && !violationNum && !vehicleNum) {
            return this.violationRepository.find();
        }
        let textquery = `select * from violation `;
        const params = [];
        let whereAdded = false;
        if (startDate && endDate) {
            textquery += `where dateTime between ? AND ?`;
            params.push(new Date(startDate), new Date(endDate));
            whereAdded = true;
        }
        if (violationNum) {
            textquery += whereAdded ? `and violationNum = ?` : `where violationNum = ?`;
            params.push(violationNum);
            whereAdded = true;
        }
        if (vehicleNum) {
            textquery += whereAdded ? `and LOWER(vehicleNum) LIKE ?` : `where LOWER(vehicleNum) LIKE ?`;
            params.push(`%${vehicleNum?.toLowerCase()}%`);
        }
        console.log('Query:', textquery);
        console.log('Params:', params);
        return this.dataSource.query(textquery, params);
    }
    async search(vehicleNum) {
        return this.violationRepository.createQueryBuilder('violation').where('LOWER(violation.vehicleNum) LIKE :vehicleNum', { vehicleNum: `%${vehicleNum.toLowerCase()}%` }).getMany();
    }
    async findAll() {
        return this.violationRepository.find();
    }
    update(id, updateViolationDto) {
        return `This action updates a #${id} violation`;
    }
    remove(id) {
        return `This action removes a #${id} violation`;
    }
};
exports.ViolationsService = ViolationsService;
exports.ViolationsService = ViolationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(violation_entity_1.Violation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], ViolationsService);
//# sourceMappingURL=violations.service.js.map