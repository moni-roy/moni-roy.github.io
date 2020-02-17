import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfomationService {

  constructor(private http: HttpClient) { }

  getGithubinfo(): Observable<any> {
    const githubUrl = 'https://api.github.com/users/moni-roy';
		return this.http.get(githubUrl);
  }
}
