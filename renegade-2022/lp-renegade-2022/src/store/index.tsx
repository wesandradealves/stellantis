
import { FC } from 'react';
import { createContext, useContext } from 'react';
import RenegadeStore from './RenegadeStore';

export const getStore = (): RenegadeStore => (new RenegadeStore());

const StoreContext = createContext({} as RenegadeStore);

interface IStoreProvider {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: RenegadeStore;
}

export const StoreProvider: FC<IStoreProvider> = ({ value, children }): JSX.Element => (
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
);

export function useMobxStores(): RenegadeStore {
    return useContext(StoreContext);
}
