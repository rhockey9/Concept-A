import { Routes } from '@angular/router';

import { HomeNHLTeamComponent } from './homenhlteam/homenhlteam.component';


export const NHLTeamsRoutes: Routes = [{
        path: '',
        children: [{
            path: ':team',
            component: HomeNHLTeamComponent
        }]
    }
];
