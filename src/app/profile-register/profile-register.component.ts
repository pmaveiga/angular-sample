import { Component, OnInit } from '@angular/core';
import { ProfileRegisterService } from './profile-register.service';
import { Question } from '../core/question';
import { Profile } from '../core/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-register',
  templateUrl: './profile-register.component.html',
  styleUrls: ['./profile-register.component.scss']
})
export class ProfileRegisterComponent implements OnInit {
  questions: Question[];
  question4: any[] = [];
  selected: any[] = [];
  values: any[] = [];

  constructor(private _profileRegisterService: ProfileRegisterService, private _router: Router) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this._profileRegisterService.list().subscribe((questions: Question[]) => {
      this.questions = questions;
    });
  }

  save() {
    this.selected.push(this.values);
    const profile = new Profile(this.selected);
    let route = this._router.config.find(r => r.path == 'resume');
    route.data = {data: profile};
    this._router.navigateByUrl('resume');
  }

  attachSelected(option, id) {
    this.selected.push({id: id, option: option});
    for (const s of Object.keys(this.selected)) {
      if (this.selected[s] == undefined) return;
      if (this.selected[s].id == id && this.selected[s].option != option) {
        this.selected.splice(+s, 1);
      }
    }
  }
}
