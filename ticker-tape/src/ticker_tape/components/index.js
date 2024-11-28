import React from 'react'
import ReactDOM from 'react-dom/client'
import TickerTape from './TickerTape'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

// Temporarily hard coded, make dynamic import
const messagesJson = [{ id: 1, message: 'Hello, World!' }]

root.render(
  <React.StrictMode>
    <TickerTape messagesJson={messagesJson} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
