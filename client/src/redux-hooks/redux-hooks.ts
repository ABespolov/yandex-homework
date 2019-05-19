import {useContext, useEffect, useReducer, useRef} from "react";
import {ReduxStoreContext} from "../index";

const forcedReducer = (state: any) => !state;
const useForceUpdate = () => useReducer(forcedReducer, false)[1];

export const useReduxDispatch = () => {
    const store = useContext(ReduxStoreContext)
        || {dispatch: {}};
    return store.dispatch;

};

export const useReduxState = () => {
    const forceUpdate = useForceUpdate();
    const store = useContext(ReduxStoreContext) ||
        {getState: (arg?: any) => arg,
        subscribe: (arg: any) => arg};
    const state = useRef(store.getState());
    useEffect(() => {
        const callback = () => {
            state.current = store.getState();
            forceUpdate({});
        };
        const unsubscribe = store.subscribe(callback);
        return unsubscribe;
    }, []);
    return state.current;
};
