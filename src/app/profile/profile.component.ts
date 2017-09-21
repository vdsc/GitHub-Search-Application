import { GithubService} from '../services/github.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx'; 
//import { GithubService} from '../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  username: string;
  constructor(private _githubservice: GithubService) {
    this.user =false;
    
   }

   SearchUser(){
    this._githubservice.updateUser(this.username);
    this._githubservice.getUser().subscribe(user => {
      //console.log(user);
      this.user =user;
    });
    this._githubservice.getRepos().subscribe(repos => {
      //console.log(user);
      this.repos =repos;
    });

   }

  ngOnInit() {
  }

}
