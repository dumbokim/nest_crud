import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TableModule } from './table/table.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BoardsModule,
    TableModule,
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,
  ],
})
export class AppModule {}
