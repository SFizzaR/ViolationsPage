import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ViolationsService } from './violations.service';
import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { Violation } from './entities/violation.entity';

@Controller('violations')
export class ViolationsController {
  constructor(private readonly violationsService: ViolationsService) { }

  @Post('addViolation')
  create(@Body() createViolationDto: CreateViolationDto) {//json body
    return this.violationsService.create(createViolationDto);
  }

  @Get('filter')
  filter(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('violationNum') violationNum?: number,
    @Query('vehicleNum') vehicleNum?: string
  ): Promise<Violation[]> {
    const parsedStartDate = startDate ? new Date(startDate) : undefined;
    const parsedEndDate = endDate ? new Date(endDate) : undefined;
    return this.violationsService.filter(parsedStartDate, parsedEndDate, violationNum, vehicleNum);
  }

  @Get('search')
  search(@Query('vehicleNum') vehicleNum: string): Promise<Violation[]> {
    return this.violationsService.search(vehicleNum);
  }

  @Get('findall')
  findAll() {//url
    return this.violationsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateViolationDto: UpdateViolationDto) {
    return this.violationsService.update(+id, updateViolationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.violationsService.remove(+id);
  }
}
