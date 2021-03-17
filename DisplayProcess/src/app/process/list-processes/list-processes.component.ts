import {Component, OnInit} from '@angular/core';
import {Proces} from '../../processmanipulation/proces';
import {ProcessService} from '../../processmanipulation/process.service';

@Component({
    selector: 'app-list-processes',
    templateUrl: './list-processes.component.html',
    styleUrls: ['./list-processes.component.css']
})
export class ListProcessesComponent implements OnInit {

    

    public listProcess = new Array<Proces>();
    private processService: ProcessService;

    constructor(processService: ProcessService) {
        this.processService = processService;
    }

    ngOnInit(): void {

    }



    fetchProcess() {
        this.processService.getAllProcess().subscribe(data => {
            this.listProcess = data;
            
        });



    }



}
