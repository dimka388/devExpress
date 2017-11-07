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
	private items: Item[];

	loadData : any = (state:boolean) => {
		if (state) {
			this.items = this.service.getOldItems();
		} else {
			this.items = this.service.getNewItems();
		}
	}

	constructor(private service: Service) {
		this.items = service.getItems();
	}
}
