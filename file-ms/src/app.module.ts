import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { configuration } from './config/configuration';

@Module({
    imports: [TypeOrmModule.forRoot(configuration.database as ConnectionOptions)],
    controllers: [AppController]
})
export class AppModule {}
