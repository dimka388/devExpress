import { Injectable } from '@angular/core';

export class Item {
	SideID: string;
	SiteName: string;
	StudyName: string;
	contacts: number;
}

@Injectable()

export class Service {
	private items: Item[] = [
		{
			SideID: 'SIT-123456',
			SiteName: 'Bolton, Roose',
			StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
			contacts: 12
		},
		{
			SideID: 'SIT-564732',
			SiteName: 'Baelish, Petyr',
			StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
			contacts: 4
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Greyjoy, Theon',
			StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
			contacts: 6
		},
		{
			SideID: 'SIT-564732',
			SiteName: 'Bolton, Roose',
			StudyName: 'Study QR-7HB',
			contacts: 9
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Martell, Oberyn',
			StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
			contacts: 3
		},
		{
			SideID: 'SIT-564732',
			SiteName: 'Tyrell, Olenna',
			StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
			contacts: 15
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Lannister, Jaime',
			StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
			contacts: 12
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Baratheon, Stannis',
			StudyName: 'Study QR-7HB',
			contacts: 4
		},
		{
			SideID: 'SIT-564732',
			SiteName: 'Lannister, Cersei',
			StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
			contacts: 3
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Clegane, Gregor',
			StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
			contacts: 9
		},
		{
			SideID: 'SIT-564732',
			SiteName: 'Tyrell, Olenna',
			StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
			contacts: 15
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Lannister, Jaime',
			StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
			contacts: 12
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Baratheon, Stannis',
			StudyName: 'Study QR-7HB',
			contacts: 4
		},
		{
			SideID: 'SIT-564732',
			SiteName: 'Lannister, Cersei',
			StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
			contacts: 3
		},
		{
			SideID: 'SIT-432654',
			SiteName: 'Clegane, Gregor',
			StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
			contacts: 9
		}
	];

	public getItems: any;

	constructor() {
		this.getItems = () => this.items;
	}
}
