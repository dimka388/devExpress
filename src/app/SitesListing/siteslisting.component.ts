import { Component } from '@angular/core';
import { Service } from './siteslisting.service';

@Component({
	selector: 'sites-listing',
	providers: [ Service ],
	templateUrl: '../SitesListing/siteslisting.component.html'
})

export class SitesListingComponent {
	private title: string = 'Sites';

	private options: any = {
		filters: true,
		columns: [
			{
				dataField:'SideID'
			},
			{
				dataField:'SiteName',
				cellTemplate: 'linkTemplate'
			},
			{
				dataField:'StudyName',
				cellTemplate: 'linkTemplate'
			},
			{
				dataField:'contacts',
				dataType: 'number',
				allowFiltering: false,
				caption: 'Number of Contacts',
				cellTemplate: 'linkTemplate'
			}
		]
	};

	constructor(private service: Service) {
		this.options.items = service.getItems();
	}
}
