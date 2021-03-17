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
  public tableTags = new Array<string>();
  public divTags = new Array<string>();
  public tableIds = new Array<string>();
  public divIds = new Array<string>();

  constructor(private getURLService: GetUrlService) {

  }

  ngOnInit(): void {

  }

  public submit() {
    var input = ((document.getElementById("input") as HTMLInputElement).value);
    this.url = input;

    this.getURLService.getUrl(input).subscribe((result) => {
      this.tableTags = result.table_tags;
      this.divTags = result.div_tags;
      this.getTableIds();
      this.getDivIds();
    });
  }

  public getTableIds() {
    for (var i = 0; i < this.tableTags.length; i++) {
      var parser = new DOMParser().parseFromString(this.tableTags[i], "text/xml");
      if (parser.children[0].id)
        this.tableIds.push(parser.children[0].id);
      else if (parser.children[0].className)
        this.tableIds.push(parser.children[0].className)
    }
  }

  public getDivIds() {
    for (var i = 0; i < this.divTags.length; i++) {
      var parser = new DOMParser().parseFromString(this.divTags[i], "text/xml");
      if (parser.children[0].id)
        this.divIds.push(parser.children[0].id);
      else if (parser.children[0].className)
        this.divIds.push(parser.children[0].className)
    }
  }
}
