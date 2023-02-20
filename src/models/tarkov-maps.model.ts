import { ITarkovBossesModel } from './tarkov-bosses.model';

export interface ITarkovMapsModel {
  id: number;
  name: string;
  normalizedName: string;
  raidDuration: number;
  players: string;
  bosses: ITarkovBossesModel[];
}
