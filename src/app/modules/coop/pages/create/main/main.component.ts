// CREATE MAIN COMPONENT
/* Used in coop.module.ts & coop-routing.module.ts */

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Import Project's Services
 */
import { CoopService } from '../../../services/coop.service';

@Component({
  selector: 'coop-create-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class CreateMainComponent implements OnInit {

  form!: FormGroup

  constructor(
    public coopService: CoopService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  get f() {
    return this.form.controls
  }

  submit() {
    this.coopService.create(this.form.value).subscribe((_res: any) => {
      this.router.navigateByUrl('coops')
    })
  }

}
