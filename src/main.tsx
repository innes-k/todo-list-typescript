import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";
// import { store } from "./redux/config/configStore.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      <GlobalStyle />
      <App />
      {/* </Provider> */}
    </QueryClientProvider>
  </React.StrictMode>
);
