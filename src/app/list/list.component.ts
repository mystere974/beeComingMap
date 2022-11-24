import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../services/list.service';
import { Capital } from './capital'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  showForm = false;

  capitalName!: string

  capitals!: Capital[];

  editingCapital: Capital | undefined;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.listService.getCapitals().subscribe(
      (response: Capital[]) => {
        this.capitals = response;
      })
  }

  onDeleteCapital(id?: number): void {
    if(id) {
      this.listService.deleteCapital(id).subscribe();
    }
  }

  onEditCapital(capital: Capital): void {
    this.editingCapital = undefined;
    this.editingCapital = capital;
  }

}



