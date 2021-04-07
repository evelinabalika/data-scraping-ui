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
    public listProcessMessage= new Array<any>();
    public stringmessage: any;
    public listProcessSelected = new Array<Proces>();
    private processService: ProcessService;
    isButtonVisible= false;
   



    constructor(processService: ProcessService) {
        this.processService = processService;
    }

    ngOnInit(): void {

    }

    

    onChange(){

        console.log(this.listProcess);
        this.isButtonVisible= true;

    }

    onSubmit(){

        this.listProcessSelected=this.listProcess.filter(x => x.selected== true);

        if(this.listProcessSelected.length > 3){

            alert("You have selected More than 3 Processes");
            this.isButtonVisible= false;

        }

        else
        {

        // this.processService.sendSelectedProcess(this.listProcessSelected).subscribe((result)=>{console.log(result);});
        this.processService.sendSelectedProcess(this.listProcessSelected).subscribe((data:any)=>{console.log(data)
            this.listProcessMessage=data;
            
        })
        
       
       

        console.log(this.listProcessSelected);

        }


    }


    fetchProcess() {
        this.processService.getAllProcess().subscribe(data => {
            this.listProcess = data;
            
        });



    }



    





}

