// Generated by https://quicktype.io

export interface Game {
  _id: string;
  id: string;
  title: string;
  playable: boolean;
  units: string;
  pinInfo: string;
  primaryColor: null;
  secondaryColor: null;
  publicResults: string[];
  playersPerTeamLimit: number;
  account: Account;
  language: Language;
  showPostAnswerComment: boolean;
  showAnswerCorrectness: boolean;
  showCorrectAnswer: boolean;
  penalizeIncorrectAnswers: boolean;
  allowChatting: boolean;
  showShortIntroUnderPin: boolean;
  showAllTeamScores: boolean;
  showAllTeamLocations: boolean;
  disableTeamTracks: boolean;
  allowTaskFiltering: boolean;
  hideFollowMe: boolean;
  hideMyLocation: boolean;
  showMyTrack: boolean;
  allowNavigation: boolean;
  allowAppFeedback: boolean;
  showCodeScanner: boolean;
  hideScore: boolean;
  hideGameTime: boolean;
  multiplePlayersPerTeam: boolean;
  allowMapClickActivationIfGpsWeak: boolean;
  mapTiles: MapTile[];
  mapOverlays: any[];
  playgrounds: any[];
  tasks: Task[];
  taskTags: any[];
  system: System;
  appPermissions: string[];
  version: number;
}

export interface Account {
  _id: string;
  primaryColor: null;
  secondaryColor: null;
  startScreenLanguage: Language;
}

export interface Language {
  id: string;
  _id: string;
  version: number;
}

export interface MapTile {
  type: string;
}

export interface System {
  minIOSVersion: string;
  minAndroidVersion: string;
}

export interface Task {
  id: string;
  _id: string;
  answerType: string;
  difficulty: number;
  text: string;
  comments: Comments;
  tags: any[];
  answers: Answer[];
  pin: Pin;
  survey: boolean;
  codeBox: boolean;
  scoreDependsOnAnswerTime: boolean;
  allowCloseAndReturn: boolean;
  keepUntilAnsweredCorrectly: boolean;
  keepUntilEndOfGame: boolean;
  allowMapClickActivation: boolean;
  showAnswerCorrectness: boolean;
  showCorrectAnswer: boolean;
  media: any[];
  fectar: null;
  custom: Custom;
}

export interface Answer {
  text: string;
  correct: boolean;
  min: null;
  max: null;
}

export interface Comments {
  correct?: string;
  incorrect?: string;
}

export interface Custom {}

export interface Pin {
  none: boolean;
  original: string;
  '3x': string;
  '2x': string;
  '1x': string;
  iconSize: number[];
  iconAnchor: number[];
  areaColor: string;
}
