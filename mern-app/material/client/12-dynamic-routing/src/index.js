import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./axios";

import App from "./App";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: Infinity,
         refetchOnWindowFocus: false,
         refetchOnMount: false,
      },
   },
});

ReactDOM.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
