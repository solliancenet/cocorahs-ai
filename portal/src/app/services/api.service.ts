import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, TimeoutError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    public getScaleBar2017(): Observable<any> {
        return this.http.get(
            `assets/files/ScaleBar-2017.csv`,  {responseType: 'text'})
            .pipe(
                catchError(this.handleError<any>('GetScaleBar2017'))
            );
    }

    public getScaleBar2018(): Observable<any> {
        return this.http.get(
            `assets/files/ScaleBar-2018.csv`,  {responseType: 'text'})
            .pipe(
                catchError(this.handleError<any>('GetScaleBar2018'))
            );
    }

    public getScaleBar2019(): Observable<any> {
        return this.http.get(
            `assets/files/ScaleBar-2019.csv`,  {responseType: 'text'})
            .pipe(
                catchError(this.handleError<any>('GetScaleBar2019'))
            );
    }

    public getHeatmap(): Observable<any> {
        return this.http.get(
            `assets/files/Heatmap-2018.csv`,  {responseType: 'text'})
            .pipe(
                catchError(this.handleError<any>('GetHeatmap'))
            );
    }

    public getWettestCounties(): Observable<any> {
        return this.http.get(
            `assets/files/WettestCounties.csv`,  {responseType: 'text'})
            .pipe(
                catchError(this.handleError<any>('GetWettestCounties'))
            );
    }

    public getUsAverage(): Observable<any> {
        return this.http.get(
            `assets/files/2018USAverages.csv`,  {responseType: 'text'})
            .pipe(
                catchError(this.handleError<any>('getUsAverage'))
            );
    }

    handleError<T>(operation = 'operation',  result?: T) {
        return (error, caught) => {
            let message = 'An unknown error has occurred.';

            if (error instanceof TimeoutError) {
                message = 'The server request has timed out. Please try again later.';
            } else if ((typeof error) === 'string') {
                message = error;
            } else if (error.error.Error) {
                message = error.error.Error.Message;
            } else if (error.Error) {
                message = error.Error.Message;
            } else {
                message = error.message;
            }

            if (message === 'Http failure response for (unknown url): 0 Unknown Error') {
                message = 'The server is unreachable at this time. Please try again later.';
            } else if (message === 'An error occurred while updating the entries. See the inner exception for details.') {
                message = 'An unexpected internal server error has occurred.';
            } else if (message.includes('was not present in the dictionary')) {
                message = 'An error occurred when saving the document. Check the document properties and try again.';
            }

            console.log(message);
            return EMPTY;
        };
    }

}