import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'gcomp-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  message: string = "Hello You!";
  user: any;
  @Input('name') declare userObj: User;

  constructor() {
    this.userObj.name="";
    setInterval(()=>{
      let dateMessage= new Date();
      this.message= dateMessage.toDateString() +' '+dateMessage.toLocaleTimeString();
    },1000);
   }

  ngOnInit(): void {
    
    
    this.user={
      name: this.userObj.name,
      title: this.userObj.title,
      address:this.userObj.address,
      phone: this.userObj.phone

    };
  }

}
