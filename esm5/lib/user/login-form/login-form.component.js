/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, RoutingService } from '@spartacus/core';
import { of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { CustomFormValidators } from '../../ui/validators/custom-form-validators';
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, routing, globalMessageService, fb) {
        this.auth = auth;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
    }
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.auth
            .getUserToken()
            .pipe(switchMap(function (data) {
            if (data && data.access_token) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                return _this.routing.getRedirectUrl().pipe(take(1));
            }
            return of();
        }))
            .subscribe(function (url) {
            if (url) {
                // If forced to login due to AuthGuard, then redirect to intended destination
                _this.routing.goByUrl(url);
                _this.routing.clearRedirectUrl();
            }
            else {
                // User manual login
                _this.routing.back();
            }
        });
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        this.auth.authorize(this.form.controls.userId.value, this.form.controls.password.value);
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    LoginFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login-form',
                    template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'login.label.emailAddress' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'login.placeholder.emailAddress' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'login.validation.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'login.label.password' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'login.placeholder.password' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ route: ['forgotPassword'] } | cxTranslateUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'login.action.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'login.action.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section__title cx-section__title--alt\">\n    {{ 'login.label.dontHaveAccount' | cxTranslate }}\n  </h3>\n  <a\n    [routerLink]=\"{ route: ['register'] } | cxTranslateUrl\"\n    class=\"btn btn-block btn-secondary\"\n    >{{ 'login.action.register' | cxTranslate }}</a\n  >\n</div>\n",
                    styles: [".register{margin-top:2rem}"]
                }] }
    ];
    /** @nocollapse */
    LoginFormComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: FormBuilder }
    ]; };
    return LoginFormComponent;
}());
export { LoginFormComponent };
if (false) {
    /** @type {?} */
    LoginFormComponent.prototype.sub;
    /** @type {?} */
    LoginFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.routing;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdXNlci9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxFQUFnQixFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRjtJQVNFLDRCQUNVLElBQWlCLEVBQ2pCLE9BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxFQUFlO1FBSGYsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQWE7SUFDdEIsQ0FBQzs7OztJQUVKLHFDQUFROzs7SUFBUjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ2pCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSCxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1osSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDN0IsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDbkUsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtZQUNELE9BQU8sRUFBRSxFQUFVLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsNkVBQTZFO2dCQUM3RSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLG9CQUFvQjtnQkFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsazhEQUEwQzs7aUJBRTNDOzs7O2dCQVpRLFdBQVc7Z0JBQUUsY0FBYztnQkFLM0Isb0JBQW9CO2dCQVBwQixXQUFXOztJQW1FcEIseUJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXBEWSxrQkFBa0I7OztJQUM3QixpQ0FBa0I7O0lBQ2xCLGtDQUFnQjs7Ozs7SUFHZCxrQ0FBeUI7Ozs7O0lBQ3pCLHFDQUErQjs7Ozs7SUFDL0Isa0RBQWtEOzs7OztJQUNsRCxnQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uL3VpL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLmF1dGhcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChkYXRhID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZy5nZXRSZWRpcmVjdFVybCgpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZjxzdHJpbmc+KCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAvLyBJZiBmb3JjZWQgdG8gbG9naW4gZHVlIHRvIEF1dGhHdWFyZCwgdGhlbiByZWRpcmVjdCB0byBpbnRlbmRlZCBkZXN0aW5hdGlvblxuICAgICAgICAgIHRoaXMucm91dGluZy5nb0J5VXJsKHVybCk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nLmNsZWFyUmVkaXJlY3RVcmwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVc2VyIG1hbnVhbCBsb2dpblxuICAgICAgICAgIHRoaXMucm91dGluZy5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ2luKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aC5hdXRob3JpemUoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHMudXNlcklkLnZhbHVlLFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==