import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;



  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar,private activatedRoute: ActivatedRoute) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
