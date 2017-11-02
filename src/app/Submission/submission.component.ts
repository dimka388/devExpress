import { Component, ViewChild } from '@angular/core';
import { Item, Service } from './submission.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
	selector: 'submission-app',
	providers: [ Service ],
	templateUrl: '../Submission/submission.component.html',
	styleUrls: ['../Submission/submission.component.scss']
})

export class SubmissionComponent {
	@ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
	title: string = 'Submission';
	items: Item[];

	customizeDate(cellData) {
		let monthes = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
			date = cellData.value,
			month = date.getMonth(),
			day = date.getDate(),
			year = date.getFullYear();
			return `${day}-${monthes[month]}-${year}`;
	}

	constructor(private service: Service) {
		this.items = service.getItems();
	}
}
