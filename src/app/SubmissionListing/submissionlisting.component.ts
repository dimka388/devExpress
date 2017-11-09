import { Component } from '@angular/core';
import { Service } from './submissionlisting.service';

@Component({
	selector: 'submission-listing',
	providers: [ Service ],
	templateUrl: '../SubmissionListing/submissionlisting.component.html'
})

export class SubmissionListingComponent {
	private title: string = 'Submission';

	private options: any = {
		filters: true,
		headerFilters: true,
		columns: [
			{
				dataField: 'Submission',
				cellTemplate: 'linkTemplate'
			},
			{
				dataField: 'Type'
			},
			{
				dataField: 'Status',
				cellTemplate: 'statusTemplate'
			},
			{
				dataField: 'Study',
				cellTemplate: 'linkTemplate'
			},
			{
				dataField: 'Site',
				cellTemplate: 'linkTemplate'
			},
			{
				dataField: 'SubmittedBy'
			},
			{
				dataField: 'SubmittedDate',
				dataType: 'date',
				caption: 'Date Submitted'
			}
		]
	};

	constructor(private service: Service) {
		this.options.items = service.getItems();
	}
}
