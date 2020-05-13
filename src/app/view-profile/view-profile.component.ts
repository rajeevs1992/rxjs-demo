import { Component, OnInit } from '@angular/core';
import { RecordService, Record } from '../services/record.service';
import { ComponentBase } from '../services/component-base';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent extends ComponentBase implements OnInit {

  constructor(private recordService: RecordService) { 
    super();
  }

  public record: Record;

  ngOnInit() {
    this.recordService.selectedRecord$.subscribe((record) => {
      console.log("ViewProfileComponent");
      this.record = record;
    })
  }

}
