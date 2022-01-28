import { createStore, applyMiddleware, compose } from "redux";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import reducer from "./todo/reducer";

const store = createStore(
  reducer,
  compose(
    offline({
      ...offlineConfig
    }),
    applyMiddleware()
  )
);

export default store;
