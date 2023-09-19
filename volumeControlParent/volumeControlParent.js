import { LightningElement, api } from 'lwc';

export default class VolumeControlParent extends LightningElement {

    slidervalue;
    @api maxsliderval;

    handlerChange(event){
        this.slidervalue=event.detail.value;
    }

    handleClick(){
        this.template.querySelector("c-volume-control-child").resetsliderval();
    } 
  
}