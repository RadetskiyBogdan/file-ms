import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MonthProjectHoursService } from './hours.service';
import { MonthProjectHoursController } from './hours.controller';
import { MonthProjectHours } from 'src/entities/hours.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MonthProjectHours])],
    controllers: [MonthProjectHoursController],
    providers: [MonthProjectHoursService]
})
export class MonthProjectHoursModule {}
