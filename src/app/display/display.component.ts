import { Component, OnInit } from '@angular/core';
import { MymusicService } from '../services/mymusic.service';
import { Match } from '../music';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  //create a class named Match. refer match.ts file in this app
  previousMatches:Array<Match>;
  constructor(private matchService:MymusicService) { 
    this.previousMatches=[];
  }
   
  ngOnInit() {
    this.matchService.getPreviousMatches().subscribe(
      (res)=>
      {
      console.log("match calendar matches")
      this.previousMatches = res['matches'];
      console.log(res);
    });
  }

}
