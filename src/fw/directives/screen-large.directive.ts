import { ScreenService } from './../services/screen.service';
import { Directive, ViewContainerRef, TemplateRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[screenLarge]' })
export class ScreenLargeDirective implements OnDestroy {
    private hasView = false;
    private screenSubscription: Subscription;

    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService
    ) {
        this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
    }

    @Input()
    set screenLarge(condition) {
        // Ignore the passed condition and set it based on screen size
        condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize() {
        // Trigger the setter
        this.screenLarge = false;
    }

    ngOnDestroy() {
        this.screenSubscription.unsubscribe();
    }
}
