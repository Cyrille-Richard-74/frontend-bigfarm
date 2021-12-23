// MODAL COMPONENT
/* Used in core.module.ts */

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `<router-outlet name="modal"></router-outlet>`,
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
