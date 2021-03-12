import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { GetUrlService } from '../services/get-url.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public url: string;
  public output = new Array<string>();
  public ids = new Array<string>();

  constructor(private getURLService: GetUrlService) { 
  }

  ngOnInit(): void {
  }

  public submit()
  {
    this.ids = new Array<string>();
    var input = ((document.getElementById("input") as HTMLInputElement).value);
    this.url = input;

    this.getURLService.getUrl(input).subscribe((result) =>{
      this.output = result.div_tags || result.table_tags;
      console.log(this.output);
      
      for(var i=0; i < this.output.length ; i++)
      {
        var parser = new DOMParser().parseFromString(this.output[i], "text/xml");
        if (parser.children[0].id) 
          this.ids.push(parser.children[0].id);
        else if(parser.children[0].className)
          this.ids.push(parser.children[0].className)
      }
    });
  }
}
