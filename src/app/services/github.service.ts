import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// we will use observables; we will return the information in observable and subscribe to it in the component
import 'rxjs/add/operator/map'; //map operator

@Injectable()
export class GithubService {
private username: string;
private client_id ='' ;
private client_secret ='' ;
 
constructor(private _http:Http) { 
    console.log("github service ready....");
    
  }

  getUser(){
   return this._http.get('http://api.github.com/users/'+ this.username+'?client_id='+this.client_id+
  '&client_secret='+ this.client_secret)
    .map(res => res.json());// we want res to be json
  }

  getRepos(){
   return this._http.get('http://api.github.com/users/'+ this.username+'/repos?client_id='+this.client_id+
  '&client_secret='+ this.client_secret)
    .map(res => res.json());// we want res to be json
  }

  updateUser(username: string){
    this.username =username;

  }

}
