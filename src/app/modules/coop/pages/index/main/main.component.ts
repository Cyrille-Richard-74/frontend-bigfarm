// COOP => INDEX MAIN COMPONENT
/* Used in coop.module.ts & coop-routing.module.ts */

/**
 * Import Angular Dependancies
 */
import { Component, OnInit } from '@angular/core';

/**
 * Import Project's Interfaces
 */
import { CoopInterface } from '../../../interfaces/coop';

/**
 * Import Project's Services
 */
import { CoopService } from '../../../services/coop.service';

@Component({
  selector: 'coop-index-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class IndexMainComponent implements OnInit {

  coops: CoopInterface[] = []

  constructor(public coopService: CoopService) { }

  ngOnInit(): void {
    this.coopService.get().subscribe((data: CoopInterface[]) => {
      this.coops = data
      // console.log(this.coops);

    })
  }

  deleteCoop(id: number) {
    this.coopService.delete(id).subscribe(_res => {
      this.coops = this.coops.filter(item => item.id !== id)
    })
  }
}
