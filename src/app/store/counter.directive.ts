import { Directive,ViewContainerRef,TemplateRef,Input,Attribute,SimpleChanges } from "@angular/core";

@Directive({
    selector:"[counterof]"
})
export class CounterDirective{
    constructor(private container:ViewContainerRef,private template:TemplateRef<Object>){}
    @Input("counterof") 
    counter:number;
    ngOnChanges(changes:SimpleChanges){
        this.container.clear()
        for(let i=0;i<this.counter;i++){
            this.container.createEmbeddedView(this.template,
                new CounterDirectiveContext(i+1));
        } //not working!
    }
}
class CounterDirectiveContext{
    constructor(public $implicit:any){}
}
