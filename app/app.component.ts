import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">

    <div class="menu">
    <a routerLinkActive="active"
       routerLink="/home">Home</a> 
    
</div>
 
      
    <router-outlet></router-outlet>



            <a href="https://stackblitz.com/edit/entrevista-solidbinary?file=app%2Fapp.component.ts" class="editor">Ir para o Editor de Código</a>


  </div>




  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

}

/** 
 * EXERCISE 1
 * Duration: 5/10 mins
 * 
 * Add a new route `/users` and display a text into the route component
 * 
 */

/** 
 * EXERCISE 2
 * Duration: 10/15 mins
 * 
 * Create a '<nav-bar>' component and move the menu there
 */