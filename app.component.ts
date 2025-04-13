import { Component } from '@angular/core';      //important to import for creating component(IMP)
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './customComponent/profile.component';
import { BtnEventComponent } from './customComponent/btnEvent.component';
import { VariablesComponent } from './customComponent/variables.component';
import { CounterComponent } from './customComponent/counters.component';
import { GetSetComponent } from './customComponent/getSetInput.component';
import { IfElse } from './customComponent/ifElse.component';
import { ElseIf } from './customComponent/elseIf.component';
import { SwitchComponent } from './customComponent/switch.component';
import { ForLoop } from './customComponent/forLoop.component';
import { SignalsComponent } from './customComponent/signals.component';
import { ContextualComponent } from './customComponent/contextualVariables.component';
import { TWB } from './customComponent/twb.component';
import { ToDoList } from './Projects/toDoList.component';
import { DynamicStyling } from './customComponent/dynamicStyling.component';
import { DirectiveComponent } from './customComponent/directives.component';
import { NgIfComponent } from './customComponent/ngIf-Directive.component';
import { NgForComponent } from './customComponent/ngFor-directive.component';
import { NgSwitchComponent } from './customComponent/ngSwitchDirective.component';

import { RouterLink, RouterOutlet } from '@angular/router';
import { RoutingComponent } from './customComponent/Routing/routing.component';
import { ServicesComponentsss } from './customComponent/services.component';
import { TextFormater } from './Projects/textFormater.component';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',                        //its mandatory to write selector(IMP)
  imports: [LoginComponent, ProfileComponent, BtnEventComponent, VariablesComponent, CounterComponent, GetSetComponent, IfElse, ElseIf, SwitchComponent, ForLoop, SignalsComponent, ContextualComponent, TWB, ToDoList, DynamicStyling, DirectiveComponent, NgIfComponent, NgForComponent, NgSwitchComponent, RoutingComponent, ServicesComponentsss, TextFormater, ReactiveFormsModule],
  templateUrl: './app.component.html',          //All the changes are happened in this HTML File
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vaishnav';
  a=10;
  b=20;

}
