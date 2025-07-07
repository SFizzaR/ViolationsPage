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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Violation = void 0;
const typeorm_1 = require("typeorm");
let Violation = class Violation {
    id;
    vehicleNum;
    violationType;
    violationNum;
    dateTime;
    latitude;
    longitude;
};
exports.Violation = Violation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Violation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Violation.prototype, "vehicleNum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Violation.prototype, "violationType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Violation.prototype, "violationNum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Violation.prototype, "dateTime", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        precision: 6,
        scale: 4
    }),
    __metadata("design:type", Number)
], Violation.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        precision: 6,
        scale: 4
    }),
    __metadata("design:type", Number)
], Violation.prototype, "longitude", void 0);
exports.Violation = Violation = __decorate([
    (0, typeorm_1.Entity)()
], Violation);
//# sourceMappingURL=violation.entity.js.map