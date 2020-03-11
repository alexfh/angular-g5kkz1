import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prduct-alerts',
  templateUrl: './prduct-alerts.component.html',
  styleUrls: ['./prduct-alerts.component.css']
})
export class PrductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}