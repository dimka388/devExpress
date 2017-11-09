import { Component } from '@angular/core';
import { Item, Service } from './submission-details.service';

@Component({
	selector: 'submission-details-app',
	providers: [ Service ],
	templateUrl: '../SubmissionDetails/submission-details.component.html',
	styleUrls: ['../SubmissionDetails/submission-details.component.scss']
})

export class SubmissionDetailsComponent {
	private title: string = 'Submission Details';

	private options: any = {
		selectionMode: 'multiple',
		columns: [
			{
				dataField:'DocumentID'
			},
			{
				dataField:'FileName'
			},
			{
				dataField:'PreferredName'
			},
			{
				dataField:'Status'
			},
			{
				dataField:'SubmittedBy'
			},
			{
				dataField:'SubmittedDate',
				dataType: 'date',
				caption: 'Date Submitted'
			}
		]
	};

	// TODO : need fix it
	loadData : any = (state:boolean) => {
		if (state) {
			this.options.items = this.service.getOldItems();
		} else {
			this.options.items = this.service.getNewItems();
		}
	}

	constructor(private service: Service) {
		this.options.items = service.getItems();
	}
}
