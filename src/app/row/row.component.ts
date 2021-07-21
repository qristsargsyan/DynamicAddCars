import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  userForm:FormGroup
  listData:any;


  constructor(private fb:FormBuilder) {

    this.listData = [];
    this.userForm= this.fb.group({
      name:["",Validators.required],
      color:["",Validators.required],
      year:["",Validators.required],
      door:["",Validators.required],
    })
   }

   public addItem():void{
     this.listData.push(this.userForm.value);
     this.userForm.reset();
   }

   reset(){
    this.userForm.reset();

   }
   removeItems(element:any){
  this.listData.forEach((value:any,index:any) =>{
    if(value == element){
this.listData.splice(index,1);
    }
  });
}

  ngOnInit(): void {
  }

}
