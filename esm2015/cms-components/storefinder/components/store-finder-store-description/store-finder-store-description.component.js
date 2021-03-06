/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreDataService, StoreFinderService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
export class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     * @param {?} storeFinderService
     * @param {?} route
     */
    constructor(storeDataService, storeFinderService, route) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.storeFinderService = storeFinderService;
        this.route = route;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.requestStoresData();
        this.location$ = this.storeFinderService.getFindStoresEntities();
        this.isLoading$ = this.storeFinderService.getStoresLoading();
    }
    /**
     * @return {?}
     */
    requestStoresData() {
        /** @type {?} */
        const storeId = this.route.snapshot.params.store;
        this.storeFinderService.viewStoreById(storeId);
    }
}
StoreFinderStoreDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-store-description',
                template: "<div\n  class=\"container\"\n  *ngIf=\"!(isLoading$ | async) && (location$ | async) as location; else loading\"\n>\n  <div class=\"row\">\n    <article class=\"cx-store col-lg-4\">\n      <h2>{{ location.displayName }}</h2>\n\n      <p *ngIf=\"location.address\" class=\"storeAddress\">\n        {{ location.address.line1 }} <br />\n        {{ location.address.town + ',' }}\n        {{ location.address.region ? location.address.region.name + ',' : '' }}\n        {{ location.address.postalCode }}\n      </p>\n\n      <section class=\"cx-contact\">\n        <ul class=\"cx-list\">\n          <li class=\"cx-item\">\n            <a\n              class=\"cx-link\"\n              [href]=\"getDirections(location)\"\n              target=\"_blank\"\n              >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n            >\n          </li>\n          <li class=\"cx-item\">\n            {{ 'storeFinder.call' | cxTranslate }}\n            {{ location.address?.phone }}\n          </li>\n          <li class=\"cx-item\">\n            <a class=\"cx-link\" [routerLink]=\"['/contact']\">{{\n              'storeFinder.contactUs' | cxTranslate\n            }}</a>\n          </li>\n        </ul>\n      </section>\n      <div class=\"cx-schedule\">\n        <cx-schedule [location]=\"location\">\n          <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n        </cx-schedule>\n      </div>\n    </article>\n    <article class=\"cx-storeMap col-lg-8\">\n      <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n    </article>\n  </div>\n\n  <div class=\"row cx-feature\">\n    <div class=\"col-lg-12\">\n      <h3 class=\"cx-features-header\">\n        {{ 'storeFinder.storeFeatures' | cxTranslate }}\n      </h3>\n    </div>\n  </div>\n\n  <article class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let feature of location.features?.entry\">\n      <div class=\"cx-features\">{{ feature.value }}</div>\n    </div>\n  </article>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderStoreDescriptionComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: StoreFinderService },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.location$;
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeDataService;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreDescriptionComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3N0b3JlZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uL3N0b3JlLWZpbmRlci1zdG9yZS1kZXNjcmlwdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBTWxHLE1BQU0sT0FBTyxvQ0FDWCxTQUFRLDBCQUEwQjs7Ozs7O0lBS2xDLFlBQ1ksZ0JBQWtDLEVBQ2xDLGtCQUFzQyxFQUN4QyxLQUFxQjtRQUU3QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUpkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN4QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUcvQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsaUJBQWlCOztjQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsdWlFQUE4RDthQUMvRDs7OztZQVBRLGdCQUFnQjtZQUFFLGtCQUFrQjtZQURwQyxjQUFjOzs7O0lBWXJCLHlEQUEyQjs7SUFDM0IsMERBQTRCOzs7OztJQUcxQixnRUFBNEM7Ozs7O0lBQzVDLGtFQUFnRDs7Ozs7SUFDaEQscURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UsIFN0b3JlRmluZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItc3RvcmUtZGVzY3JpcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXN0b3JlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTdG9yZURlc2NyaXB0aW9uQ29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2NhdGlvbiQ6IE9ic2VydmFibGU8YW55PjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcbiAgICBzdXBlcihzdG9yZURhdGFTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVxdWVzdFN0b3Jlc0RhdGEoKTtcbiAgICB0aGlzLmxvY2F0aW9uJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldEZpbmRTdG9yZXNFbnRpdGllcygpO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldFN0b3Jlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIHJlcXVlc3RTdG9yZXNEYXRhKCkge1xuICAgIGNvbnN0IHN0b3JlSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5zdG9yZTtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS52aWV3U3RvcmVCeUlkKHN0b3JlSWQpO1xuICB9XG59XG4iXX0=