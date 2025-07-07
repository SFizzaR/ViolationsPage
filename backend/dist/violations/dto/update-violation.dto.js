"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateViolationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_violation_dto_1 = require("./create-violation.dto");
class UpdateViolationDto extends (0, mapped_types_1.PartialType)(create_violation_dto_1.CreateViolationDto) {
}
exports.UpdateViolationDto = UpdateViolationDto;
//# sourceMappingURL=update-violation.dto.js.map