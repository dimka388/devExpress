import { Component } from '@angular/core';

export class Item {
	DocumentID: number;
	FileName: string;
	PreferredName: string;
	Status: string;
	SubmittedBy: string;
	SubmittedDate: string;
}

@Component({
	selector: 'submission-details-app',
	moduleId: module.id,
	templateUrl: 'submission-details.component.html',
	styleUrls: ['submission-details.component.scss']
})

export class SubmissionDetailsComponent {
	private title: string = 'Submission Details';
	private items: Item[] = [
		{
			"DocumentID": 11223344,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Submitted",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/08/08"
		},
		{
			"DocumentID": 22334455,
			"FileName": "SomeUnrecognizedNameFile.pdf",
			"PreferredName": "same as File Name",
			"Status": "Currently Approved",
			"SubmittedBy": "Stark, Arya",
			"SubmittedDate": "2017/08/08"
		},
		{
			"DocumentID": 33445566,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Not Approved",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/07/28"
		},
		{
			"DocumentID": 7676757,
			"FileName": "SomeUnrecognizedNameFile.pdf",
			"PreferredName": "same as File Name",
			"Status": "Approval Withdrawn",
			"SubmittedBy": "Stark, Arya",
			"SubmittedDate": "2017/07/28"
		},
		{
			"DocumentID": 99009977,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Aknowledged",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/07/28"
		},
		{
			"DocumentID": 99009977,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Aknowledged",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/07/18"
		},
		{
			"DocumentID": 99009977,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Aknowledged",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/07/08"
		},
		{
			"DocumentID": 4535251,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Currently Approved",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/07/04"
		},
		{
			"DocumentID": 55667788,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Aknowledged",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/07/04"
		},
		{
			"DocumentID": 99887766,
			"FileName": "SomeUnrecognizedNameFile.pdf",
			"PreferredName": "same as File Name",
			"Status": "Currently Approved",
			"SubmittedBy": "Stark, Arya",
			"SubmittedDate": "2017/07/04"
		},
		{
			"DocumentID": 99007766,
			"FileName": "DocSomeUnrecognized.pdf",
			"PreferredName": "same as File Name",
			"Status": "Currently Approved",
			"SubmittedBy": "Stark, Sansa",
			"SubmittedDate": "2017/06/14"
		},
		{
			"DocumentID": 44557788,
			"FileName": "SomeUnrecognizedNameFile.pdf",
			"PreferredName": "same as File Name",
			"Status": "Approval Withdrawn",
			"SubmittedBy": "Stark, Arya",
			"SubmittedDate": "2017/06/14"
		}
	];

	customizeDate(cellData) {
		let monthes = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
			date = cellData.value,
			month = date.getMonth(),
			day = date.getDate(),
			year = date.getFullYear();
			return `${day >= 10 ? day : '0' + day}-${monthes[month]}-${year}`;
	}

	constructor() {}
}
