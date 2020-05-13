import { Injectable } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';

export class Record {
  public name: string;
  public id: number;
  constructor(id: number, name) {
    this.name = name;
    this.id = id;
  }
}

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private records: Array<Record> = [];

  constructor() {
    this.records.push(new Record(1, "Jhon Doe"));
    this.records.push(new Record(2, "Charlie"));
    this.records.push(new Record(3, "Elvin"));
  }


  private _selectedRecord: Subject<Record> = new Subject();
  public selectedRecord$ = this._selectedRecord.asObservable();

  public getAllRecords(): Observable<Record[]> {
    return of(this.records);
  }

  public setSelectedRecord(rid) {
    this._selectedRecord.next(this.records.find(o => o.id == rid));
  }

}
