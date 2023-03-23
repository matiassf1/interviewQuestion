import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { DataTable } from './DataTable'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)
