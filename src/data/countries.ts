import { Country } from "../models/country";

export class Countries {
    public list: Country[] = [
        { 
            id: 1,
            name: 'Norwegian',
            image_url: 'http://flags.fmcdn.net/data/flags/w580/no.png',
        },
        {
            id: 2,
            name: 'British',
            image_url: 'http://flags.fmcdn.net/data/flags/w580/gb.png'
        },
        {
            id: 3,
            name: 'American',
            image_url: 'http://flags.fmcdn.net/data/flags/w580/us.png'
        }
    ]
}