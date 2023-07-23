import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HtmlBodyHeaderComponent } from "./html-body-header.component";

describe("HtmlBodyHeaderComponent", () => {

  let component: HtmlBodyHeaderComponent;
  let fixture: ComponentFixture<HtmlBodyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlBodyHeaderComponent]
    });
    fixture = TestBed.createComponent(HtmlBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});