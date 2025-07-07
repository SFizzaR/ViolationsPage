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
exports.ViolationsController = void 0;
const common_1 = require("@nestjs/common");
const violations_service_1 = require("./violations.service");
const create_violation_dto_1 = require("./dto/create-violation.dto");
const update_violation_dto_1 = require("./dto/update-violation.dto");
let ViolationsController = class ViolationsController {
    violationsService;
    constructor(violationsService) {
        this.violationsService = violationsService;
    }
    create(createViolationDto) {
        return this.violationsService.create(createViolationDto);
    }
    filter(startDate, endDate, violationNum, vehicleNum) {
        const parsedStartDate = startDate ? new Date(startDate) : undefined;
        const parsedEndDate = endDate ? new Date(endDate) : undefined;
        return this.violationsService.filter(parsedStartDate, parsedEndDate, violationNum, vehicleNum);
    }
    search(vehicleNum) {
        return this.violationsService.search(vehicleNum);
    }
    findAll() {
        return this.violationsService.findAll();
    }
    update(id, updateViolationDto) {
        return this.violationsService.update(+id, updateViolationDto);
    }
    remove(id) {
        return this.violationsService.remove(+id);
    }
};
exports.ViolationsController = ViolationsController;
__decorate([
    (0, common_1.Post)('addViolation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_violation_dto_1.CreateViolationDto]),
    __metadata("design:returntype", void 0)
], ViolationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __param(2, (0, common_1.Query)('violationNum')),
    __param(3, (0, common_1.Query)('vehicleNum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String]),
    __metadata("design:returntype", Promise)
], ViolationsController.prototype, "filter", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('vehicleNum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ViolationsController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('findall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViolationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_violation_dto_1.UpdateViolationDto]),
    __metadata("design:returntype", void 0)
], ViolationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ViolationsController.prototype, "remove", null);
exports.ViolationsController = ViolationsController = __decorate([
    (0, common_1.Controller)('violations'),
    __metadata("design:paramtypes", [violations_service_1.ViolationsService])
], ViolationsController);
//# sourceMappingURL=violations.controller.js.map