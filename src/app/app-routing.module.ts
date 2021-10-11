import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsPageComponent } from './pages/aws-page/aws-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PortalPageComponent } from './pages/portal-page/portal-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'portal', component: PortalPageComponent },
  { path: 'aws', component: AwsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
