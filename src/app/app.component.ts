import { Component } from '@angular/core';
import { ServerHttpService } from './Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'fivem';

  constructor(
    private serverHttp: ServerHttpService
  ) { }
//   ngOnInit(): void {
//     this.serverHttp.getInfors().subscribe(data => {
//       this.globalData = data.Global;
//       this.countriesData = data.Countries;
//     })

//   public orderBy(key, dir) {
//     this.countriesData = .orderBy(this.countriesData, key, dir)
//   }
//   }
}
