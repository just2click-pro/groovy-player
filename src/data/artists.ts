import { Artist } from '../models/artist';
import { Countries } from './countries';
import { Injectable } from '@angular/core';

@Injectable()
export class Artists {

    constructor (private _countries: Countries) {

    }

    public list: Artist[] = [
        { 
            name: 'A-ha', 
            image_url: 'http://www.gigslutz.co.uk/wp-content/uploads/2014/10/a-ha_176018-1280x1024.jpg', 
            youtube_url: 'https://www.youtube.com/watch?v=djV11Xbc914',
            year_started: 1984,
            country: this._countries.list[0]

        },
        { 
            name: 'Sting', 
            image_url: 'https://www.billboard.com/files/styles/article_main_image/public/media/sting-2013-650-430.jpg', 
            youtube_url: 'https://www.youtube.com/watch?v=ZtEIuz71tEk',
            year_started: 1977,
            country: this._countries.list[1]
        },
        { 
            name: 'Bob Dylen', 
            image_url: 'https://media.guim.co.uk/0d35ac385b3c5a08e498f11648c439226877c743/0_435_4192_2514/master/4192.jpg', 
            youtube_url: 'https://www.youtube.com/watch?v=1FOlV1EYxmg',
            year_started: 1963,
            country: this._countries.list[2]
        }        

    ]
}