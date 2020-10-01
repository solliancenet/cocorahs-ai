export class Heatmap {
    public county: string;
    public values: any;

    constructor(county: string, values: any){
        this.county = county;
        this.values = values;
      }
}