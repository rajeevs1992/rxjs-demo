import { Injectable } from '@angular/core';
import { of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export class HeightData {
  public id: number;
  public height: number;
  public when: Date;
  public comments: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  public addToStore(recordid: number, height: HeightData) {
    let dataStore: any = localStorage.getItem("DATASTORE");
    if (dataStore) {
      dataStore = JSON.parse(dataStore);
    } else {
      dataStore = {};
    }
    if (!dataStore[recordid]) {
      dataStore[recordid] = [];
    }
    height.id = dataStore[recordid].length + 1;
    dataStore[recordid].push(height);
    localStorage.setItem("DATASTORE", JSON.stringify(dataStore));
    return of(height);
  }

  public getData(recordid: number) {
    console.log("DataStoreService:Getdata")
    let dataStore: any = localStorage.getItem("DATASTORE");
    if (dataStore) {
      dataStore = JSON.parse(dataStore);
    } else {
      dataStore = {};
    }
    if (!dataStore[recordid]) {
      dataStore[recordid] = [];
    }
    return timer(500)
      .pipe(
        switchMap((_) => {
          return of(dataStore[recordid]);
        })
      );


  }
}
