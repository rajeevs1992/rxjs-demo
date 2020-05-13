import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordService } from '../services/record.service';
import { flatMap } from 'rxjs/operators';
import { DataStoreService } from '../services/data-store.service';
import { ComponentBase } from '../services/component-base';

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

  ngOnInit() {
  }

  onSave() {
    let sub = this.recordService.selectedRecord$
      .pipe(
        flatMap(record => {
          return this.dataStoreService.addToStore(record.id, this.heightForm.value);
        })
      )
      .subscribe((res) => {
        this.message = `Height entry with value ${res.height} saved!`;
      });
    this.addSubscription(sub);
  }

}
