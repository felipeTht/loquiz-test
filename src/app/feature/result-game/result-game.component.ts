import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';
import { Game } from 'src/app/shared/model/game';
import { Team } from 'src/app/shared/model/team';
import { GameService } from 'src/app/shared/service/game.service';

@Component({
  selector: 'lq-result-game',
  templateUrl: './result-game.component.html',
  styleUrls: ['./result-game.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResultGameComponent implements OnInit {
  form: FormGroup;
  game: Game;
  teams: Team[];
  pageSize: number = 4;
  totalElements: number = 0;

  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gameId: new FormControl('FK5TS3QAB', Validators.required),
    });
    this.searchGame();
  }

  searchGame() {
    const gameId = this.form.get('gameId')?.value;
    this.gameService
      .getGame(gameId)
      .pipe(take(1))
      .subscribe((resp) => {
        this.game = resp;
        this.loadTable(0);
      });
  }

  loadTable(skip: number) {
    const gameId = this.form.get('gameId')?.value;
    this.gameService
      .getResultTeams(gameId, this.pageSize, skip)
      .pipe(take(1))
      .subscribe((resp) => {
        const { total, items } = resp;
        this.teams = items;
        this.totalElements = total;
      });
  }
}
