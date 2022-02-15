import { createStore, applyMiddleware, compose } from "redux";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import reducer from "./todo/reducer";

const effect = ({ json, method, url }) => {
  return new Promise((resolve, reject) => {
    console.log(method);
    console.log(url);
    resolve(json);
    reject(new Error("reject"));
  });
};

const store = createStore(
  reducer,
  compose(
    offline({
      ...offlineConfig,
      effect
    }),
    applyMiddleware()
  )
);

export default store;
