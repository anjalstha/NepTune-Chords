import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChordsDetailPageRoutingModule } from './chords-detail-routing.module';

import { ChordsDetailPage } from './chords-detail.page';
import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChordsDetailPageRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [ChordsDetailPage]
})
export class ChordsDetailPageModule {}
