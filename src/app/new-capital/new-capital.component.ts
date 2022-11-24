import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Capital } from '../list/capital';
import { ListService } from '../services/list.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-new-capital',
  templateUrl: './new-capital.component.html',
  styleUrls: ['./new-capital.component.css']
})
export class NewCapitalComponent implements OnInit {

  capitalForm!: FormGroup;

  capitalId!: string | null;

  capital!: Capital;

  private ZOOM: number = 10;

  constructor(private formBuilder: FormBuilder, private listService: ListService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.capitalId = params.get('id');
      if (this.capitalId) {
        this.listService.getCapital(this.capitalId).subscribe((capital: Capital) => {
          this.capital = capital;
          this.initForm();
        })
      } else {
        this.initForm();
      }
    })
  }

  initForm(): void {
    if (this.capitalId) {
      this.capitalForm = this.formBuilder.group({
        name: this.capital.name,
        population: this.capital.population,
        country: this.capital.country,
        zoom: this.ZOOM,
        center: this.formBuilder.group({
          lat: this.capital.center.lat,
          lng: this.capital.center.lng
        })

      });
    } else {
      this.capitalForm = this.formBuilder.group({
        name: null,
        population: null,
        country: null,
        zoom: this.ZOOM,
        center: this.formBuilder.group({
          lat: null,
          lng: null
        })
    });
  }
}

  onSubmitForm(): void {

    let capital = this.capitalForm.getRawValue();

    console.log(capital);

    let request: Observable<Capital>;

    if (this.capitalId) {

      request = this.listService.postCapital(capital, this.capitalId);
    } else {
      request = this.listService.postCapital(capital);
    }

    request.subscribe(()=> {
      this.router.navigate(['/list']);
    });


  }

}
