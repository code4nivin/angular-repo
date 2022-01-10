import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gcomp-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  message: string = "Hello You!";
  user: any;

  constructor() {
    setInterval(()=>{
      let dateMessage= new Date();
      this.message= dateMessage.toDateString() +' '+dateMessage.toLocaleTimeString();
    },1000);
    
    this.user={
      name: 'Ganesh',
      title: 'address',
      address:'261, Mudhaliar Patti Street,Srvilliputtur',
      phone: []

    };
   }

  ngOnInit(): void {
  }

}
