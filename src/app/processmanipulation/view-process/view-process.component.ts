import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProcessModule} from 'src/app/process/process.module';
import {ProcessService} from '../process.service';
import {Proces} from '../proces';


@Component({
    selector: 'app-view-process',
    templateUrl: './view-process.component.html',
    styleUrls: ['./view-process.component.css']
})
export class ViewProcessComponent implements OnInit {

    listProcess!: Proces;
    private processService: ProcessService;

    constructor(processService: ProcessService) {
        this.processService = processService;
    }

    ngOnInit(): void {
        this.processService.getAllProcess().subscribe(data => {
            this.listProcess = data;
        });
    }

}
