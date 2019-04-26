import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../core/question';
import { ProfileRegisterService } from '../profile-register/profile-register.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  data: any;
  questions: Question[];

  constructor(private _router: Router, private _profileRegisterService: ProfileRegisterService) {
  }

  ngOnInit() {
    this._profileRegisterService.list().subscribe((questions: Question[]) => {
      this.questions = questions;
    });

    const r = this._router.config.find(r => r.path == 'resume');
    this.data = r.data;
  }

}
