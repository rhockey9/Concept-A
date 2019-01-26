import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NHLTeamsRoutes } from './nhlteams.routing';

import { HomeNHLTeamComponent } from './homenhlteam/homenhlteam.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NHLTeamsRoutes),
        FormsModule
    ],
    declarations: [
        HomeNHLTeamComponent
    ]
})

export class NHLTeamsModule {}