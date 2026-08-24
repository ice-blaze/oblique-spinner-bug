import {TestBed} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {Home} from './home';
import {ObSpinnerModule} from '@oblique/oblique';
import {TranslateModule} from '@ngx-translate/core';

describe('Home', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterModule.forRoot([]), ObSpinnerModule, TranslateModule.forRoot()],
			declarations: [Home]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(Home);
		const app = fixture.componentInstance;
		app.ngAfterViewInit();
		expect(app).toBeTruthy();
	});
});
