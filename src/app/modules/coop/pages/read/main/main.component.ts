// READ MAIN COMPONENT
/* Used in coop.module.ts & coop-routing.module.ts */

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Import Project's Services
 */
import { CoopService } from '../../../services/coop.service';

/**
 * Import Project's Interfaces
 */
import { CoopInterface } from '../../../interfaces/coop';

@Component({
  selector: 'coop-read-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class ReadMainComponent implements OnInit {

  id!: number
  coop: CoopInterface = {} as CoopInterface

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
  }
}
