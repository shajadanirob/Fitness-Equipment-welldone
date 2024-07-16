import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store.ts";
// import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import router from "./routes/routes";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
  
        <RouterProvider router={router} />
    
      <Toaster />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
