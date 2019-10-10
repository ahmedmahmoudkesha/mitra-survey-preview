export class SurveySetting {
    constructor() {
        this.languages = [
            new Language({
                code: 'en',
                is_primary: true,
                id: 1,
                logo: 'https://storage.googleapis.com/mitra-images/languages/united-kingdom.svg',
                name: 'English'
            })
        ];
        this.selectedLanguage = this.languages[0];
        this.is_live = false;
        this.show_progress = true;
    }

    is_live: boolean;
    languages: Language[];
    selectedLanguage: Language;
    show_progress: boolean;
}

export class Language {
    code: string;
    is_primary: boolean;
    id: number;
    logo: string;
    name: string;

    constructor(data: Language) {
        this.code = data.code;
        this.is_primary = data.is_primary;
        this.id = data.id;
        this.logo = data.logo;
        this.name = data.name;
    }
}
