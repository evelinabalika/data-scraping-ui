import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { GetUrlService } from '../services/get-url.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public url: string;
  public message: string;

  constructor(private getURLService: GetUrlService) { 
  }

  ngOnInit(): void {
  }

  public submit()
  {
    var input = ((document.getElementById("input") as HTMLInputElement).value);
    this.url = input;
    //console.log(input);
    this.getURLService.getUrl(this.url).subscribe((result) =>{
       console.log(JSON.stringify(result));
       this.message = JSON.stringify(result.message);
    });
  }
}
