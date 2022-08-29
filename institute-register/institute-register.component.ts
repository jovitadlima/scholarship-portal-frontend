import { Component, OnInit } from '@angular/core';
import { STATES } from '../../../assets/data/STATES';
import {InstituteRegister} from 'src/app/models/InstituteRegister';
import { InstituteService } from 'src/app/services/institute.service';


@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css'],
})
export class InstituteRegisterComponent implements OnInit {

  constructor(private _instituteService:InstituteService) {} //injecting

  instituteModel = new InstituteRegister();

  states: any = STATES;
  districts: any[] = [];
  institutecategories: string[] = ['Government Institute', 'Private Institute'];
  locations: string[] = ['Rural', 'Urban'];
  instituteTypes:string[]=['1','2'];
  years:string[]=['2018','2019','2020','2021','2022']
  ngOnInit(): void {}

  onSubmit(){
    console.log(JSON.stringify(this.instituteModel));
    alert(this.instituteModel);
    
    this._instituteService.register(this.instituteModel)
    .subscribe(
      data=>console.log ('Successful!',data),
      error=>console.log('Error',error)
    )
  }

  changeDistrict(stateEvent: any) {
    let selectedState = stateEvent.target.value;
    this.districts = this.states.find(
      (st: any) => st.state == selectedState
    ).districts;
  }
}
