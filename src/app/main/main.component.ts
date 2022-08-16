import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ServerHttpService } from '../Services/server-http.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
  isChecked = false;
  public totalData: any;
  public searchBar = '';
  public searchTagsBar = '';
  public nameTags : any[] = [];
  public nameTagsRaw : any[] = [];
  public infors:any;
  constructor(
    private serverHttp: ServerHttpService
  ) { }

  
  ngOnInit(): void {
    this.serverHttp.getInfors().subscribe((data) => {
      this.infors = data;
    })
  }
  public removeTag(index: any){
    this.nameTags.splice(index,1)
  }
  public removeAddTags() {
    this.nameTagsRaw = [];
    this.nameTags = [];
  }
  public addTag(event: any) {
    if (event.key === "Enter" && this.searchTagsBar !== '' && this.searchTagsBar !== ' ' && this.searchTagsBar.length < 50) {
      this.nameTagsRaw.push(this.searchTagsBar);
      this.searchTagsBar = '';
      this.nameTags = [...new Set(this.nameTagsRaw)]
    }
  }
  public orderBy(key: any, dir: any) {
    this.infors = _.orderBy(this.infors, key, dir);
    }
  public onSelect(item: any) {
    console.log('tag selected: value is ' + item);
  }
}
