export class Match {
  static readonly FIRSTTEAM = 'FIRSTTEAM';
  static readonly SECONDTEAM = 'SECONDTEAM';
  static readonly DRAW = 'DRAW';

  constructor(
    public key: string,
    public firstteam: string,
    public secondteam: string,
    public starttime: number,
    private bets_firstteam: string[],
    private bets_secondteam: string[],
    private bets_draw: string[],
    public result: string | null,
    public points: number | null
  ) {}

  currentSelected(userid: string) {
    if (this.bets_firstteam.includes(userid)) {
      return this.firstteam;
    } else if (this.bets_secondteam.includes(userid)) {
      return this.secondteam;
    } else if (this.bets_draw.includes(userid)) {
      return 'Draw';
    }
    return '';
  }
}
