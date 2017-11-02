import { Component } from '@angular/core';

@Component({
	selector: 'data-grid-app',
	moduleId: module.id,
	templateUrl: 'datagrid.component.html',
	styleUrls: ['datagrid.component.scss']
})

export class DataGridComponent {
	private items = [];
	constructor() {}
}
