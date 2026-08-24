import {AfterViewInit, Component, inject} from '@angular/core';
import {ObSpinnerService} from '@oblique/oblique';

@Component({
	selector: 'app-home',
	templateUrl: './home.html',
	styleUrls: ['./home.scss'],
	standalone: false
})
export class Home implements AfterViewInit {
	protected readonly channel = `demoChannel`;
	private readonly spinnerService = inject(ObSpinnerService);

	public ngAfterViewInit(): void {
		this.spinnerService.activate(this.channel);
	}
}
