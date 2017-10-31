import { Component, ViewChild } from '@angular/core';
import { Order, Service } from './app.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
	selector: 'demo-app',
	providers: [ Service ],
	templateUrl: '../app/app.component.html',
	styleUrls: ['../app/app.component.css']
})

export class AppComponent {
	@ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
	orders: Order[];
	saleAmountHeaderFilter: any;
	showFilterRow: boolean;
	showHeaderFilter: boolean;
	private itemsURL: string = 'https://59f734d6d85fbd0012ee2235.mockapi.io/items';

	getOrderDay(rowData) {
		return (new Date(rowData.OrderDate)).getDay();
	}

	orderHeaderFilter(data) {
		data.dataSource.postProcess = (results) => {
			results.push({
				text: "Weekends",
				value: [
					[this.getOrderDay, "=", 0],
					"or", [this.getOrderDay, "=", 6]
				]
			});

			return results;
		};
	}

	clearFilter() {
		this.dataGrid.instance.clearFilter();
	}

	constructor(private service: Service) {
		this.orders = service.getOrders();
		this.showFilterRow = true;
		this.showHeaderFilter = true;
		this.saleAmountHeaderFilter = [{
			text: "Less than $3000",
			value: ["SaleAmount", "<", 3000]
		}, {
			text: "$3000 - $5000",
			value: [
				["SaleAmount", ">=", 3000],
				["SaleAmount", "<", 5000]
			]
		}, {
			text: "$5000 - $10000",
			value: [
				["SaleAmount", ">=", 5000],
				["SaleAmount", "<", 10000]
			]
		}, {
			text: "$10000 - $20000",
			value: [
				["SaleAmount", ">=", 10000],
				["SaleAmount", "<", 20000]
			]
		}, {
			text: "Greater than $20000",
			value: ["SaleAmount", ">=", 20000]
		}];
		this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
	}
}
