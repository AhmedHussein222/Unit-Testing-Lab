import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponentForLab } from "./messages.lab.component";


describe("2-message component integration testing:", () => {
    let div: HTMLElement;
    let fixture:ComponentFixture<MessagesComponentForLab>
    let  comp:MessagesComponentForLab
    beforeEach(() => {
        
        fixture = TestBed.createComponent(MessagesComponentForLab);
        comp = fixture.componentInstance;
        
    });
    
    it("expect component template to be empty", () => {
        //Note: there is @if"messageService.messages.length" in line 1 in template
        
        div = fixture.nativeElement.querySelector('div');
        expect(div).toBeNull();
        
    })
    it("then expect div.msg to have the messages after setting it", () => {
        comp.messageService.messages = [{'id': 1,'message': 'Ahmed Hussein'}];
        fixture.detectChanges();
        
        let msgInTemplate = fixture.nativeElement.querySelector('div.msg');
        console.log(msgInTemplate);
        
        
        expect(msgInTemplate.textContent).toContain("Ahmed Hussein");
    })
})