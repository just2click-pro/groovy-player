import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";

@Injectable()
export class InvokeInPageService {
    invokePlayVideo: Subject<any> = new Subject();
    invokeNationialitySelected: Subject<any> = new Subject();
    
    playVideo (url) {
        let vid = url.split('?v=')[1];
        this.invokePlayVideo.next(vid)
    }

    nationalitySelected (id) {
        this.invokeNationialitySelected.next(id);
    }
}