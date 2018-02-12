import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";

@Injectable()
export class Spinner{
    spinner : any;
    constructor(private loader:LoadingController){

    }

    start(obj){
        let content = obj.loaderText || 'Loading...';
        this.spinner = this.loader.create({content: content,spinner:'circles'});
        this.spinner.present();
        return this.spinner;
    }
}