import { AnonymousSubject } from "rxjs/internal/Subject";

export class WettestCounties {
    public year: number;
    public county: string;
    public values: any;

    constructor(year: number, county: string, values: any) {
        this.year = year;
        this.county = county;
        this.values = values;
    }
}