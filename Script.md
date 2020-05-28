# Script

- RxJS is a library that allows you to program in an async paradigm.

## Observables and subscriptions

- Publish a trigger somewhere and do an action somewhere else
- It is analogous to event based programming, but does not rely on events 
- Observables : Some asynchronous action that will complete or happen later and hence needs to be observed, example HTTP, timer. Older way was callbacks, promises etc. now we have obs. 
- Subject -  is a child class of observable that includes trigger function next. When next is invoked, the callback function of the subscription is invoked. We will get into details shortly
- Operators (map, tap, flatmap, switchmap, filter, first, distinctuntilchanged) - Also include a lot of opertarors, that allow you to transform filter or pipe data into other observables

Let us start with a simple example. We have a basic height form site here, similar to PHR

We have a language picker on top. A dropdown, that has list of langs. On chnage we have a service function being invoked. The service function
simply triggers a next on a subject. On other side of the world, some lame componet subscribes to the public observable and does an alert. That's the core of
RxJS.

## Subscribe function
- You subscribe to an observbable by passing in a callback function as a parameter
- Actually supports 3 funcs, success, error and complete
- complete functions are usually not really useful in our use cases. 
- returning from subscribe is worthless. Only way to return a value from an observable chain is to return an observable. There is a lot of code in our projects that return values from subscribe, which simply wont work. Its currently working because of some sheer luck and may crash with some confugrintion change.
- Every time you call a subscribe, a new listener is added, and will be executed n times on each emission. Be very very careful while you do subscriube on user action like button click. Make sure you know what you are doing
- Same case is when you subscribe inside subscribe. Every time parent emission is done, child subscribe will get one more listener.
- moving subscribe to a function and calling that inside the first subscribe is not a sloution. Explore cleaner ways

## Unsubscribe
- The next most common pitfall is to forget to unsubscribe
- We have built mechanisms to unsubscribe on component base. Forgetting to register the subs is a big mistake
- View profile console log --Example
- Further, its good to remember unsubscribe happens only on destory. so multiple subscriptions on button clicks and save stay alive until you navigate away
- Similarly, subscribes in service or top level components are never unsubscribed.


## Subject vs BehaviourSubject vs ReplaySubject
- Subject: Cannot use in view profile
    - Emit once, if there are listeners, they get it else lost
    - Useful for in component scenarios like autosuggest -- Example
- Fix using Behaviour Subject
    - needs a default value
    - remember and emits the last emitted value
    - good to remember null is not a good default value
- Fix using Replay subject
    - Repeats last n emitted values
    - Usually used with n=1
    - Subscribers will wait until 1st emission

## flatMap vs switchMap vs combineLatest
- Issue of flatmap using table
    - The table fetches data from a service
    - needs selected record
    - needs lang (for no good reason)
    - lang flatmapped to record
    - every time record emits, new subscription for lang added
    - So when finally lang emits, we have a blast
- Switch record 5 times
- Fix using switchmap
    - cancells previous subscription

## Repititive subscription issue
- Save item, replay on record switch
    - Was Very common in PHR, and still suceptible
    - 
- Fix using first
- Fix using on init fetch

## Implement refresh data
- Using normal function
    - Usual PHR way, binddata
    - Subscriptions build up
- Using subject