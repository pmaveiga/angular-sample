import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modal', {read: ElementRef}) modal;

  constructor(private _renderer: Renderer2, private _router: Router) { }

  ngOnInit() {
  }

  enableModal = () => this._renderer.setStyle(this.modal.nativeElement.firstChild, 'visibility', 'visible');
}
