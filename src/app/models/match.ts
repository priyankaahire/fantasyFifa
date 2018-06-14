export class Match {
  static readonly FIRSTTEAM = 'FIRSTTEAM';
  static readonly SECONDTEAM = 'SECONDTEAM';
  static readonly DRAW = 'DRAW';

  constructor(
    public key: string,
    public firstteam: string,
    public secondteam: string,
    public starttime: number,
    private bets_firstteam: object | null,
    private bets_secondteam: object | null,
    private bets_draw: object | null
  ) {}

  currentSelected(userid: string) {
    if (this.bets_firstteam && this.bets_firstteam.hasOwnProperty(userid)) {
      return this.firstteam;
    } else if (this.bets_secondteam && this.bets_secondteam.hasOwnProperty(userid)) {
      return this.secondteam;
    } else if (this.bets_draw && this.bets_draw.hasOwnProperty(userid)) {
      return 'Draw';
    }
    return '';
  }
}
