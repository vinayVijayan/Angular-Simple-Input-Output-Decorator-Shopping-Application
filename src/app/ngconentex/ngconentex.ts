import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ngconentex',
  styleUrl: './ngconentex.scss',
  templateUrl: './ngconentex.html',
})
export class Ngconentex {

  @Input() productname:string = ''
  @Input() price:number = 0
  @Output() itemadded = new EventEmitter<string>()
  buyItem(){
    this.itemadded.emit(this.productname)
  }
}
