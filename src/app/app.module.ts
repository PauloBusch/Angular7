import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Comp0Component } from './comp0/comp0.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: Comp0Component },
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'comp1/:id', component: Comp1Component },
  { path: 'comp1/:id/:titulo', component: Comp1Component },
  { path: '**', component: Comp0Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Comp0Component,
    Comp1Component,
    Comp2Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
