import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  // create a variable to accept the data from parent component.

  @Input() childAcno:any|undefined

  //  create an event using EventEmitter class

  @Output() onCancel=new EventEmitter()     // onCancel is event we created.
                                            // And we need to call the event onCancel event in the parent component. 
                                            // That's why we used the ouput decorator.


  // create event

  @Output() onDelete=new EventEmitter()
  
  
  constructor() {

  }

  // methods

  noClick(){
    this.onCancel.emit()
  }

  acDelete(){
    this.onDelete.emit(this.childAcno)
  }

}
