import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./app/store.ts";
import { Provider } from "react-redux";
import RQProvider from "./components/common/RQProvider.tsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <RQProvider>
          <App />
        </RQProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
