export class UsAverage {
    public state: string;
    public scaleBar: number;
    public year: number;
    public month: number;

    constructor(state: string, scaleBar: number, year: number, month: number){
        this.state = state;
        this.scaleBar = scaleBar;
        this.year = year;
        this.month = month;
      }
}