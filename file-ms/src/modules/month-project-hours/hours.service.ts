import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

import { MonthProjectHours } from 'src/entities/hours.entity';

export interface IMonthProjectHours {
    id?: number;
    developerId: number;
    projectId: number;
    month: string;
    hours: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Injectable()
export class MonthProjectHoursService {
    constructor(
        @InjectRepository(MonthProjectHours)
        private hoursRepository: Repository<MonthProjectHours>
    ) {}

    getAll(): Promise<MonthProjectHours[]> {
        return this.hoursRepository.createQueryBuilder().getMany();
    }

    create(hours: IMonthProjectHours): Promise<InsertResult> {
        return this.hoursRepository
            .createQueryBuilder()
            .insert()
            .into(MonthProjectHours)
            .values(hours)
            .execute();
    }
}
