import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './boards/configs/typeorm.config';
import { TableModule } from './table/table.module';

@Module({
  imports: [BoardsModule, TableModule, TypeOrmModule.forRoot(typeORMConfig)],
})
export class AppModule {}
