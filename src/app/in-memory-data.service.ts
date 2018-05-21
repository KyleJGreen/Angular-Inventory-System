import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 11, name: 'broom', price: 12.50, category: 'cleaning supplies', artisanID: null },
      { id: 12, name: 'teapot', price: 23.75, category: 'kitchen', artisanID: 7 }
    ];
    return {items};
  }
}
