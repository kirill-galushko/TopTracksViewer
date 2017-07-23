import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService{
    API_KEY = ''
    constructor(private http: Http){ }

    getData(num: number){

        return this.http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key='+this.API_KEY+'&format=json&limit='+num.toString());
    }
}