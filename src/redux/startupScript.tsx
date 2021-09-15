import { Store } from 'redux';
import { getProfileDetails } from './users/operators';

function initialReduxStartupScript(store: Store): void {
    //@ts-ignore
    store.dispatch(getProfileDetails(store.dispatch));
}

export { initialReduxStartupScript };

