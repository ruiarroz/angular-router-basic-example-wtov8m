import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeViewComponent } from './views/home/home.component';
import { SolidbinaryComponent } from './views/solidbinary/solidbinary.component';


@NgModule({
  declarations: [ 
     HomeViewComponent
  ],
  imports: [
    RouterModule.forRoot([ 
      { path: 'home', component: HomeViewComponent },    
      { path: 'entrevista', component: SolidbinaryComponent },    
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


