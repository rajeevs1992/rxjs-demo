import { Component, OnInit } from '@angular/core';
import { RecordService, Record } from '../services/record.service';
import { DataStoreService, HeightData } from '../services/data-store.service';
import { flatMap, map, switchMap } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';
import { ComponentBase } from '../services/component-base';

@Component({
  selector: 'app-height-table',
  templateUrl: './height-table.component.html',
  styleUrls: ['./height-table.component.css']
})
export class HeightTableComponent extends ComponentBase implements OnInit {

  constructor(private recordService: RecordService,
    private languageService: LanguageService,
    private dataStoreService: DataStoreService) {
    super();
  }
  record: Record;
  locale: string;
  data: HeightData[] = [];
  ngOnInit() {
    let sub = this.recordService.selectedRecord$
      .pipe(
        switchMap((record) => {
          this.record = record;
          this.data = [];
          return this.dataStoreService.getData(record.id);
        }),
        switchMap((data) => {
          return this.languageService.selectedLanguage$
            .pipe(
              map(locale => {
                //console.log("Language map")
                this.locale = locale;
                return data;
              })
            )
        })
      )
      .subscribe((data: any) => {
        //console.log("HeightTableComponent:Getdata")
        this.data = data;
      });
    this.addSubscription(sub);
  }
}
