import { XmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Race, Season } from '../common/models/race';
import { ResultsService } from '../common/services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  availableYears: Season[] = [];
  races: Race[] = [];

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.getYears()
  }

  loadResults(selectedYear: string){
    this.resultsService.getResults(selectedYear).subscribe(
      data => {
        this.races = data.MRData.RaceTable.Races;
        console.log(this.races)
      }
    )
  }

  getYears(){
    this.resultsService.getAvailableSeasons().subscribe(
      (data) => {
        this.availableYears = data.MRData.SeasonTable.Seasons;
      }
    )
  }

  onYearChange(event: MatSelectChange){
    this.loadResults(event.value);
  }

}
