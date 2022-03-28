import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as dayjs from 'dayjs';
import { Team } from 'src/app/shared/model/team';

@Component({
  selector: 'lq-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent implements OnInit {
  @Input() data: Team[];
  @Input() pageSize: number;
  @Input() total: number;
  @Output() onChangePage = new EventEmitter();

  displayedColumns: string[] = [
    'teamName',
    'members',
    'odometer',
    'playtime',
    'totalScore',
  ];
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  getMembers(team: Team) {
    return team.members?.join(', ') || '-';
  }

  getPlayedTime(team: Team) {
    const finishTime = dayjs.unix(team.finishTime);
    const startTime = dayjs.unix(team.startTime);

    return `${finishTime.diff(startTime, 'minutes')} minutes`;
  }

  getOdometerValue(team: Team) {
    return (Math.round(team.odometer * 100) / 100).toFixed(2);
  }

  changePage(event: any) {
    this.onChangePage.emit(this.pageSize * event.pageIndex);
  }
}
