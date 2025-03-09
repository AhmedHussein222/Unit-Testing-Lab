import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HeroServiceForLab } from "./hero.lab.service";

describe("3-hero service (http) integration testing:", () => {
    let httpTesting :HttpTestingController
    let service:HeroServiceForLab
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [
              // ... other test providers
              provideHttpClient(),
              provideHttpClientTesting(),
            ],
          });
          httpTesting = TestBed.inject(HttpTestingController);
           service = TestBed.inject(HeroServiceForLab)
          
    })
    it("getHeroes function: send request and receive response successfully", () => { 
        service.getHeroes().subscribe({
            next:(hero)=>{
                expect(hero[0].name).toBe("Ahmed")
            }
        }
            
        )
        let getRes = httpTesting.expectOne(service.heroesUrl)
        expect(getRes.request.method).toBe("GET")

        getRes.flush([{id:5,name:"Ahmed"}])

    })
    it("updateHero function: send request and receive response successfully", () => { 

        service.updateHero({id:3,name:"Ahmed Hussein",strength:25}).subscribe({
            next:(data)=>{
                expect(data).toEqual({id:3,name:"Ahmed Hussein",strength:25})
            }
        })
        let updateRes=httpTesting.expectOne(service.heroesUrl)

        expect(updateRes.request.method).toBe("PUT")

        updateRes.flush({id:3,name:"Ahmed Hussein",strength:25})

    })
})