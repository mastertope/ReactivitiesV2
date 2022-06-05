import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

/*
1. Create interface
2. Create a variable of type observable class utilizing the interface
3. Create context from the variable and store in another variable
4. Use useContext with variable from #3 as a context type
5. Export as a custom hook 
*/

interface Store {
    activityStore: ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}