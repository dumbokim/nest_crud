import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  private lists = ['hi'];

  getAll() {
    return this.lists;
  }
}
