// COOP => UPDATE MAIN COMPONENT
/* Used in coop.module.ts & coop-routing.module.ts */

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Import Project's Services
 */
import { CoopService } from '../../../services/coop.service';

/**
 * Import Project's Interfaces
 */
import { CoopInterface } from '../../../interfaces/coop';

@Component({
  selector: 'coop-update-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class UpdateMainComponent implements OnInit {

  id!: number
  coop: CoopInterface = {} as CoopInterface
  form!: FormGroup

  constructor(
    public coopService: CoopService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.coopService.find(this.id).subscribe((data: CoopInterface) => {
      this.coop = data
    })

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
    this.coopService.update(this.id, this.form.value).subscribe((_res: any) => {
      this.router.navigateByUrl('coops')
    })
  }
}
