import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'data-grid-app',
	templateUrl: '../DataGrid/datagrid.component.html',
	styleUrls: ['../DataGrid/datagrid.component.scss']
})

export class DataGridComponent implements OnInit {
	@Input() customOptions: any;

	private getAttributeValue = (attr, column) => column[attr];

	private defaultOptions: any = {
		filters: false,
		headerFilters: false,
		selectionMode: 'none',
		selectionCheckboxes: 'always',
		editingMode: 'row',
		allowUpdating: false,
		allowDeleting: false,
		allowAdding: false,
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
