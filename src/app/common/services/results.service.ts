import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://ergast.com/api/f1/xxxx/results.json?limit=400&offset=0";
const seasonsUrl = "http://ergast.com/api/f1/seasons.json?limit=100";
@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private httpClient: HttpClient) { }

  getResults(season: string): Observable<any>{
    return this.httpClient.get(this.getUrl(season));
  }

  getAvailableSeasons(): Observable<any>{
    return this.httpClient.get(seasonsUrl);
  }

  getUrl(season: string): string {
    return baseUrl.replace('xxxx', season);
  }
}
