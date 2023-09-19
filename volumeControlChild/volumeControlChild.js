import { LightningElement,api} from 'lwc';

export default class VolumeControlChild extends LightningElement {

    @api slidervalue;

    @api maxsliderval;

    @api resetsliderval(){
        this.slidervalue=0;
    }
}