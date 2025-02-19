import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ENV from "@app/env";
import App from "@app/App";
import reportWebVitals from "@app/reportWebVitals";
import { KeycloakProvider } from "@app/components/KeycloakProvider";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

const queryClient = new QueryClient();

const renderApp = () => {
  ReactDOM.render(
    <KeycloakProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </KeycloakProvider>,
    document.getElementById("root")
  );
};

if (ENV.NODE_ENV === "development") {
  import("./mocks/browser").then((browserMocks) => {
    if (browserMocks.config.enabled) {
      browserMocks.worker.start();
    }
    renderApp();
  });
} else {
  renderApp();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
