import { Componente13Component } from './componente13/componente13.component';
import { Componente12Component } from './componente12/componente12.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente1Component } from './componente1/componente1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import { Componente6Component } from './componente6/componente6.component';
import { Componente7Component } from './componente7/componente7.component';
import { Componente10Component } from './componente10/componente10.component';
import { Componente11Component } from './componente11/componente11.component';
import { Componente8Component } from './componente8/componente8.component';
import { Componente9Component } from './componente9/componente9.component';

const routes: Routes = [
  {path:'componente1', component:Componente1Component},
  {path:'componente2', component:Componente2Component},
  {path:'componente3', component:Componente3Component},
  {path:'componente4', component:Componente4Component},
  {path:'componente5', component:Componente5Component},
  {path:'componente6', component:Componente6Component},
  {path:'componente7', component:Componente7Component},
  {path:'componente8', component:Componente8Component},
  {path:'componente9', component:Componente9Component},
  {path:'componente10', component:Componente10Component},
  {path:'componente11', component:Componente11Component},
  {path:'componente12', component:Componente12Component},
  {path:'componente13', component:Componente13Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
