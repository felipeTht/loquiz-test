import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultGameComponent } from '../result-game.component';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { GameTableComponent } from '../components/game-table/game-table.component';

@NgModule({
  declarations: [ResultGameComponent, GameTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ResultGameComponent],
})
export class ResultGameModule {}
