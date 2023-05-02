import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  order?: Cart

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {

    this.order = {
      id: 1,
      fullName: '',
      address: '',
      creditCardNumber: 0,
      total: 0,
      items: []
    }
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.order = this.orderService.getOrder(id)
  }
}
