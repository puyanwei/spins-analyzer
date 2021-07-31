export interface HandHistories {
  data: Array<HandHistoryData>;
}

export interface HandHistoryData {
  buyIn: string;
  createdAt: string;
  currency: string;
  dateStarted: string;
  first: string;
  firstCountry: string;
  numberOfPlayers: string;
  prizePool: string;
  rake: string;
  result: string;
  second: string;
  secondCountry: string;
  third: string;
  thirdCountry: string;
  timeRegion: string;
  timeStarted: string;
  totalBuyIn: string;
  tournamentNumber: string;
}
