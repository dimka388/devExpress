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
				format: {day: '2-digit', month: 'short', year: 'numeric', type: 'dd-mm-yyyy'},
				caption: 'Date Submitted'
				// cellTemplate: 'dateTemplate'
				// "dd-mm-yyyy": function(date) {
				// 	return [FORMATTERS.dd(date), cutCaptions([FORMATTERS.month(date)], "abbreviated"), FORMATTERS.year(date)].join("-")
				// }
			}
		]
	};

	constructor(private service: Service) {
		this.options.items = service.getItems();
	}
}
