
// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { AwsManagerApiService } from './services/aws-manager-api.service'

// PrimeNg Modules
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

// App Components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PortalPageComponent } from './pages/portal-page/portal-page.component';
import { TopMenuComponent } from './components/navigation/top-menu/top-menu.component';
import { AwsPageComponent } from './pages/aws-page/aws-page.component';
import { LambdaTableComponent } from './components/tables/lambda-table/lambda-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PortalPageComponent,
    TopMenuComponent,
    AwsPageComponent,
    LambdaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    TabViewModule,
    TableModule
  ],
  providers: [
    AwsManagerApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
