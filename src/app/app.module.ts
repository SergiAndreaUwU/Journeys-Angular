import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {Countries} from './sign-up-component/countries';

import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { JourneysComponent } from './journeys/journeys.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http'
import {GeoDbFreeModule} from 'wft-geodb-angular-client'
@NgModule({
  declarations: [
    AppComponent,

    SignUpComponentComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    JourneysComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(Countries),
    GeoDbFreeModule.forRoot({
      apiKey: null,
      serviceUri: "http://geodb-free-service.wirefreethought.com"
    }),
    RouterModule.forRoot([
        {path:'', component: HomeComponent},
        {path:'journeys', component: JourneysComponent},
        {path:'sign-up', component: SignUpComponentComponent},
        {path:'sign-in', component: SignInComponent},
        {path:'register', component: RegisterComponent},
        {path:'**',redirectTo: '', pathMatch:'full'}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
