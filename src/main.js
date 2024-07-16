import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsxs(Provider, { store: store, children: [_jsx(RouterProvider, { router: router }), _jsx(Toaster, {}), _jsx(ToastContainer, {})] }) }));
