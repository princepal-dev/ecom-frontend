import App from "./App.tsx";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./store/reducers/store.ts";

import "./main.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
