import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordService } from '../services/record.service';
import { flatMap, switchMap, first } from 'rxjs/operators';
import { DataStoreService } from '../services/data-store.service';
import { ComponentBase } from '../services/component-base';
import { Record } from '../services/record.service';

@Component({
  selector: 'app-height-form',
  templateUrl: './height-form.component.html',
  styleUrls: ['./height-form.component.css']
})
export class HeightFormComponent extends ComponentBase implements OnInit {

  constructor(private recordService: RecordService, private dataStoreService: DataStoreService) {
    super();
  }

  heightForm = new FormGroup({
    height: new FormControl('', Validators.required),
    when: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
  });

  message = "";
  private record: Record;
  ngOnInit() {
    this.recordService.selectedRecord$
      .subscribe(record => {
        this.record = record;
      })
  }

  onSave() {
    let sub = this.dataStoreService.addToStore(this.record.id, this.heightForm.value)
      .pipe(
        first()
      )
      .subscribe((res) => {
        this.message = `Height entry with value ${res.height} saved!`;
      });
    this.addSubscription(sub);
  }

}
