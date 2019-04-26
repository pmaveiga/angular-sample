import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private _renderer: Renderer2, private _router: Router) {
  }

  @Input() title: string;
  @Input() content: string;
  agree: boolean;
  @Input() buttonContent: string;
  @Input() agreeContent: string;
  @Input() enable: boolean;

  ngOnInit() {
  }

  closeModal() {
    const parent = this._renderer.parentNode(event.target)['parentNode'];
    this._renderer.setStyle(parent, 'visibility', 'hidden');
  }

  confirm = () => this._router.navigate(['resume']);
}
