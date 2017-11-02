import { Component } from '@angular/core';

@Component({
	selector: 'submission-details-app',
	moduleId: module.id,
	templateUrl: 'submission-details.component.html',
	styleUrls: ['submission-details.component.scss']
})

export class SubmissionDetailsComponent {
	title: string = 'Submission Details';
	constructor() {}
}
