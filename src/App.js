import React, { memo, Suspense } from 'react'
import { renderRoutes } from "react-router-config";
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import routes from './router';
import store from './store'

import HRAppHeader from './components/app-header'
import HRAppFooter from './components/app-footer'
import HRPlayerBar from "./pages/player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HRAppHeader />
        <Suspense fallback="page loding">
          {renderRoutes(routes)}
        </Suspense>
        <HRAppFooter />
      </HashRouter>
      <HRPlayerBar />
    </Provider>
  )
})
