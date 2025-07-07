import { PartialType } from '@nestjs/mapped-types';
import { CreateViolationDto } from './create-violation.dto';

export class UpdateViolationDto extends PartialType(CreateViolationDto) {}
