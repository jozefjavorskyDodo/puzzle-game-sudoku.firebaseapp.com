import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HtmlBodyFooterComponent } from "./html-body-footer.component";

describe("HtmlBodyFooterComponent", () => {

  let component: HtmlBodyFooterComponent;
  let fixture: ComponentFixture<HtmlBodyFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlBodyFooterComponent]
    });
    fixture = TestBed.createComponent(HtmlBodyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});