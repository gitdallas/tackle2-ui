import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./Routes";
import { DefaultLayout } from "./layout";
import { NotificationsProvider } from "./components/NotificationsContext";

import "@patternfly/patternfly/patternfly.css";
import "@patternfly/patternfly/patternfly-addons.css";

import "./app.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NotificationsProvider>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </NotificationsProvider>
    </BrowserRouter>
  );
};

export default App;
