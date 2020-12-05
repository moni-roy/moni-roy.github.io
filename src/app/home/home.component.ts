import { Component, OnInit } from '@angular/core';
import { InfomationService } from '../services/infomation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageLink: any;

  constructor(
    private infoService: InfomationService
  ) { }

  ngOnInit() {
    this.getGithubInfo();
  }

  getGithubInfo() {
    this.infoService.getGithubinfo().subscribe(
      (data: any) => {
        this.imageLink = data['avatar_url'];
      }
    )
  }
}
