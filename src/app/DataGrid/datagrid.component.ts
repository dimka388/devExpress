import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'data-grid-app',
	providers: [DatePipe],
	templateUrl: '../DataGrid/datagrid.component.html',
	styleUrls: ['../DataGrid/datagrid.component.scss']
})

export class DataGridComponent implements OnInit {
	@Input() customOptions: any;

	private defaultOptions: any = {
		format: {
			formatter: (date) => {
				if (typeof date.getDate === 'function') {
					return this.datePipe.transform(date, 'dd-MMM-yyyy');
				}
			}
		},
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
		items: []
	}

	private options: any = {};

	ngOnInit() {
		this.options = {...this.defaultOptions, ...this.customOptions};
	}

	constructor(private datePipe: DatePipe) {}
}