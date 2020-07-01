import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Timeline } from '../models/timeline';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class AppService {


    public itens: Timeline[] = [];
    constructor( ) { }

    public addItem(text:AbstractControl, textTitle:AbstractControl) {
        let itemIimeline: Timeline = new Timeline(
           text, textTitle
        )
        this.itens.push(itemIimeline);
        console.log(itemIimeline)
    }

    public getItemTimeline(){
        return this.itens;
      
    }


}