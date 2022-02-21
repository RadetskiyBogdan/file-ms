import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, ConnectionOptions } from 'typeorm';

import { configuration } from './config/configuration';
import { DevelopersModule } from './developers/developers.module';
import { FilesModule } from './files/files.module';

@Module({
    imports: [TypeOrmModule.forRoot(configuration.database as ConnectionOptions), DevelopersModule, FilesModule]
})
export class AppModule {
    constructor(private connection: Connection) {}
}
