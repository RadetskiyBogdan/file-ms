import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { configuration } from './config/configuration';
import { DevelopersModule } from './modules/developers/developers.module';
import { FilesModule } from './modules/files/files.module';
import { MonthProjectHoursModule } from './modules/month-project-hours/hours.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(configuration.database as ConnectionOptions),
        DevelopersModule,
        FilesModule,
        ProjectsModule,
        MonthProjectHoursModule
    ]
})
export class AppModule {}
