import { Injectable } from '@angular/core';

import { RestaurantInterface } from '../interfaces/index';

@Injectable()
export class BiteService {

    getRestaurants(): RestaurantInterface[] {
        return [{
            title: 'Five guys',
            type: 'americana',
            rate: 3
        },
        {
            title: 'Vaca Nostra',
            type: 'americana',
            rate: 4
        },
        {
            title: 'Horno Azul',
            type: 'italiana',
            rate: 4
        }];
    }
}
