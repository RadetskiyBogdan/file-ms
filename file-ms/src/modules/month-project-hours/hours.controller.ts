import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MonthProjectHours } from 'src/entities/hours.entity';

import { MonthProjectHoursService } from './hours.service';

@Controller('hours')
export class MonthProjectHoursController {
    constructor(private readonly hoursService: MonthProjectHoursService) {}

    @Get()
    @MessagePattern({ role: 'hours', cmd: 'get-all' })
    async getAll(): Promise<MonthProjectHours[]> {
        return await this.hoursService.getAll();
    }
}
