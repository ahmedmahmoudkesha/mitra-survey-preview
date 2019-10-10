export class IndustryTag {
    industry_ids: string[];
    name: string;
    _id: string;
}

export class Industry {
    name: string;
    tags: IndustryTag[];
    _id: string;
}
