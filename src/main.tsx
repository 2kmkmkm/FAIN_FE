import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import RQProvider from "./components/common/RQProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RQProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RQProvider>
  </Provider>
);
