import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, ConnectionOptions } from 'typeorm';

import { configuration } from './config/configuration';
import { DevelopersModule } from './modules/developers/developers.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
    imports: [TypeOrmModule.forRoot(configuration.database as ConnectionOptions), DevelopersModule, ProjectsModule]
})
export class AppModule {
    constructor(private connection: Connection) {}
}
