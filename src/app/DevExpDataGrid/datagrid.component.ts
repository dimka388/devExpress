import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'data-grid-app',
	moduleId: module.id,
	templateUrl: 'datagrid.component.html',
	styleUrls: ['datagrid.component.scss']
})

export class DataGridComponent implements OnInit {
	@Input() customOptions: any;

	private getAttributeValue = (attr, column) => column[attr];

	private defaultOptions: any = {
		filters: false,
		paging: 10,
		columns: [],
		items: [],
		linkClickHandler: (event, data) => {
			event.preventDefault();
			console.log('Link data:', data);
		}
	}

	private options: any = {};

	ngOnInit() {
		this.options = {...this.defaultOptions, ...this.customOptions};
	}

	constructor() {}
}
