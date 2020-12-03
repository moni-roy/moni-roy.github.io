import { Component, OnInit } from '@angular/core';
import { InfomationService } from '../services/infomation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  imageLink: string;

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
