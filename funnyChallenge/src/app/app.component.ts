
import { HttpClient } from '@angular/common/http';
import { AppService } from './service/service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Timeline } from './models/timeline';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'funnyChallenge';
  textControl = new FormControl();
  textTitle: AbstractControl;
  text: AbstractControl;
  public itemTimeline: Timeline[] = [];
  listItensTimeline$ :Observable<any[]>;
  public form: FormGroup;

  constructor(private serviceTimeline: AppService, private http: HttpClient, private fb: FormBuilder){
    this.form = fb.group({
      'textTitle': ['', Validators.compose([Validators.required])],
      'text': ['', Validators.compose([Validators.required])]
  })
}
 add() {
  this.text = this.form.controls['text'].value;
  this.textTitle = this.form.controls['textTitle'].value;
  this.serviceTimeline.addItem(this.textTitle, this.text);
  this.itemTimeline = this.serviceTimeline.getItemTimeline();
  this.listItensTimeline$ = this.getAllitems();
  console.log("obsv", this.listItensTimeline$)
  }
  
getAllitems() {
  if(this.itemTimeline != null){
      return Observable.create((observer) => {observer.next(this.itemTimeline)})
  } 
}


}
