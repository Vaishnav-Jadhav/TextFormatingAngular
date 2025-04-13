import { Component } from '@angular/core';      //important to import for creating component(IMP)
import { TextFormater } from './Projects/textFormater.component';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',                        //its mandatory to write selector(IMP)
  imports: [TextFormater, ReactiveFormsModule],
  templateUrl: './app.component.html',          //All the changes are happened in this HTML File
  styleUrl: './app.component.css'
})
export class AppComponent {

}
