import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";


export class ComponentBase implements OnDestroy {
    private _subscriptions: Array<Subscription> = []

    addSubscription(subscription: Subscription) {
        this._subscriptions.push(subscription);
    }
    ngOnDestroy() {
        this._subscriptions.forEach(o => {
            o.unsubscribe();
        });
    }

}