import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, ConnectionOptions } from 'typeorm';

import { configuration } from './config/configuration';
import { DevelopersModule } from './developers/developers.module';

@Module({
    imports: [TypeOrmModule.forRoot(configuration.database as ConnectionOptions), DevelopersModule]
})
export class AppModule {
    constructor(private connection: Connection) {}
}
