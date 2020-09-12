import { Order } from './../../../domain/entities/order';
import { FetchOrdersUseCase } from './../../../domain/usecases/fetch-orders.usecase';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items$: Observable<Order[]>;
  constructor(private fetchOrdersUseCase: FetchOrdersUseCase) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.items$ = this.fetchOrdersUseCase.execute();
  }
}
