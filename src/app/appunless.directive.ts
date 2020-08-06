import { ViewContainer, TemplateRef, Directive, Input } from "@angular/core";

@Directive({
  selector:'[appUnless]'
})
class export AppUnlessDirective{
  hasView = false;
  constructor(
    public templateRef: TemplateRef,
    public viewContainer: ViewContainer
  ){

  }

  @Input() set appUnless(condition :boolean){
    if(!condition && this.hasView){
      this.viewContainer.createEmbededView(this.templateRef);
      this.hasView = true;
    }else if(condition && this.hasView){
      this.viewContainer.clear();
    }
  }
}