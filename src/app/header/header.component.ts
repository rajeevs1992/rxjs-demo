import { Component, OnInit } from '@angular/core';
import { LanguageService, Locale } from '../services/language.service';
import { RecordService, Record } from '../services/record.service';
import { ComponentBase } from '../services/component-base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends ComponentBase implements OnInit {

  constructor(private languageService: LanguageService,
    private recordService: RecordService) {
    super();
  }

  public locales: Locale[] = [];
  public records: Record[] = [];
  public showProfile = false;

  ngOnInit() {
    this.languageService.getAllLanguages().subscribe((locales) => {
      this.locales = locales;
    });

    this.recordService.getAllRecords().subscribe((records) => {
      this.records = records;
    });
  }

  onLanguageSelect(locale) {
    this.languageService.setSelectedLanguage(locale);
  }

  onRecordSelect(recordid: number) {
    this.recordService.setSelectedRecord(recordid);
  }

}
