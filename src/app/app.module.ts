import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DemoUtilsModule } from './module';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { DataComponent } from './home/navbar/data/data.component';
import { LoginComponent } from './login/login.component';


//DIRECTIVES

import { IdentityRevealedValidatorDirective } from './shared/identity.directive';
// import { TimeSheetComponent } from './time-sheet/time-sheet.component';

//Routes
const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent},
  // {path:'timesheet', component: TimeSheetComponent}
 
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DataComponent,
    LoginComponent,
    // DemoAppComponent,
    // TimeSheetComponent,
    IdentityRevealedValidatorDirective
   
    ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      maxPercent:9
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule,
    // CalendarModule.forRoot(),
    DragAndDropModule,
    DemoUtilsModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
export class DemoModule {}