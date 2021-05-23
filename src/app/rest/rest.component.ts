import { Component, OnInit } from '@angular/core';
import { Colleges } from '../colleges';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  colleges:Colleges[]=[];
  name:any;
  constructor(public rs:RestService) { }

  ngOnInit() {
    this.rs.getColleges().subscribe((response)=>{
      this.colleges=response;
      console.log(this.colleges);
    });
  }

  Search(){
    if(this.name==""){
      this.ngOnInit();
    }
    else{
      this.colleges=this.colleges.filter((res)=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

}
