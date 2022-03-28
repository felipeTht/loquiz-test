import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private GAME_URL = `${environment.apiBaseUrl}/${environment.games}`;
  private RESULTS_URL = `${environment.apiBaseUrl}/${environment.results}`;

  constructor(private httpClient: HttpClient) {}

  getGame(gameId: String) {
    return this.httpClient.get<Game>(`${this.GAME_URL}/${gameId}`);
  }

  getResultTeams(gameId: String, pageSize: number, skip: number) {
    return this.httpClient.get<any>(
      `${this.RESULTS_URL}/${gameId}/teams?skip=${skip}&limit=${pageSize}&sort=-totalScore`
    );
  }
}
