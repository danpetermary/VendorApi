import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusicsService } from '../musics.service';
import { Match } from '../music';

@Injectable({
  providedIn: 'root'
})
export class MymusicService {
  emailId:string;
  matchobj : Match;

  constructor(private httpService:HttpClient) { }


  getPreviousMatches(): Observable<any> {
    return  this.httpService.get<Match>('http://cricapi.com/api/matches?apikey=ZpUlMqdgvKOMkSrrvl5Jy306roJ2');
  }
}
