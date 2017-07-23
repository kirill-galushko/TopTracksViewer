import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Tracks} from './tracks';

@Component({
    selector: 'my-app',
    template: `<div>
                    <p>Название: {{tracks?.name}}</p>
                    <p>Исполнитель: {{tracks?.artist.name}}</p>
                    <p>Количество прослушиваний: {{tracks?.playcount}}</p>
                    <child-comp (onChanged)="onChanged($event)"></child-comp>
               </div>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    tracks: Tracks;

    constructor(private httpService: HttpService){}

    currentNumber:number = 1;

    onChanged(increased: boolean){
        (increased==true && this.currentNumber>1)?this.currentNumber--:this.currentNumber++;

        this.httpService.getData(this.currentNumber).subscribe((data: Response) => this.tracks=data.json().tracks.track.pop());
    }

    ngOnInit(){

        this.httpService.getData(1).subscribe((data: Response) => this.tracks=data.json().tracks.track[0]);
    }
}