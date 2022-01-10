import { Component } from '@angular/core';
import { User } from './front/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular Ganesh APP';

  constructor(){
    let user: User= new User();
    user.name="Shan";
    user.title="Architect";
    user.address="261, India";
    user.phone=['767658','76576576'];

  }
}
