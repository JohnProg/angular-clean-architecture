import { Order } from './../../../domain/entities/order';
import { FetchOrdersUseCaseService } from '../../../domain/usecases/fetch-orders-usecase.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items$: Observable<Order[]>;
  constructor(private fetchOrdersUseCase: FetchOrdersUseCaseService) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.items$ = this.fetchOrdersUseCase.execute();
  }
}
