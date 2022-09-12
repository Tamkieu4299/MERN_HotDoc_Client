import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import ProductContextProvider from "./pages/drugstore/productContext";

import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./pages/chat/ChatProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
        <BrowserRouter>
        <AuthContextProvider>
            <ProductContextProvider>
                <ChatProvider>
                    <App />
                </ChatProvider>
            </ProductContextProvider>
        </AuthContextProvider>
        </BrowserRouter>
    </ChakraProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();