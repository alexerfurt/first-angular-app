import { Injectable } from '@angular/core';

import { Spot } from './spot';
import { SPOTS } from './mock-spots';

@Injectable()
export class SpotService {
  getSpots(): Spot[] {
    return SPOTS;
  }
}
