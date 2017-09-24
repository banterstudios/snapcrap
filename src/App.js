import React from 'react'

import { Provider } from 'react-redux'

import store from 'store'

import Router from 'config/Router'

import Startup from 'containers/Startup'

import MainLayout from 'layouts/Main'

const App = () => {
  return (
    <Provider store={store}>
      <Startup>
        <MainLayout>
          <Router />
        </MainLayout>
      </Startup>
    </Provider>
  )
}

export default App
