import { InMemoryDbService } from 'angular-in-memory-web-api';

import {Country}from './country'

export class Countries implements InMemoryDbService {

  createDb() {
    const countrys: Country[] = [
      {
        id:1,
        name:"Mexico"
      },
      {
        id:2,
        name:"USA"
      },
      {
        id:3,
        name:"Canada"
      },
    ];
    return { countrys };
  }
}
