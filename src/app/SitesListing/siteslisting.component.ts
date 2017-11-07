import { Component } from '@angular/core';
import { Service } from './siteslisting.service';

@Component({
	selector: 'sites-listing',
	moduleId: module.id,
	providers: [ Service ],
	templateUrl: 'siteslisting.component.html',
	styleUrls: ['siteslisting.component.scss']
})

export class SitesListingComponent {
	private title: string = 'Sites';
	private options: any = {
		holderClass: 'sites-table',
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
