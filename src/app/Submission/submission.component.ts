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

	constructor(private service: Service) {
		this.items = service.getItems();
	}
}
