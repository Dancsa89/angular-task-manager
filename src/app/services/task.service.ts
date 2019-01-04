import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private BASE_URL = 'https://api.spacexdata.com/v2';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getRockets(): Observable<{name: string, id: string, rocketid: number}[]> {
    return this.httpClient.get<{name: string, id: string, rocketid: number}[]>(this.BASE_URL + '/rockets');
  }
}
