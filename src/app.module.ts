import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TableModule } from './table/table.module';

@Module({
  imports: [BoardsModule, TableModule],
})
export class AppModule {}
