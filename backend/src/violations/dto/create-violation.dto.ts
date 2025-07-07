import { IsString, IsNotEmpty, IsDate, IsNumber, Min, Max } from 'class-validator';

export class CreateViolationDto {
    @IsString()
    @IsNotEmpty()
    vehicleNum: string;

    @IsNotEmpty()
    @IsDate()
    dateTime: Date;

    @IsNotEmpty()
    @IsNumber()
    latitude: number;

    @IsNotEmpty()
    @IsNumber()
    longitude: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(5)
    violationNum: number;
}
