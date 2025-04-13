import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-formater',
  templateUrl: './textFormater.component.html',
  imports: [ReactiveFormsModule],
  styleUrl: '../../../node_modules/bootstrap/dist/css/bootstrap.css',
  
})
export class TextFormater {
  
  selectedSize = new FormControl();
  selectedColor = new FormControl();

  color='';
  size=' ';

  applyClick()
  {
    this.color=this.selectedColor.value;
    this.size=this.selectedSize.value+"px";

    console.log(this.selectedColor.value, this.selectedSize.value)
    console.log(typeof this.size)
  }
}
