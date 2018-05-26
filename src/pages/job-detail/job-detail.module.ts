import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobDetailPage } from './job-detail';

@NgModule({
  declarations: [
    JobDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(JobDetailPage),
  ],
})
export class JobDetailPageModule {}
