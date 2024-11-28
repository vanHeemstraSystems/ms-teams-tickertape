import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard'
import Messages from './Messages.js'
import TickerTape from './TickerTape'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

// Temporarily hard coded, make dynamic import
const risksJson = [{}]
const messagesJson = [{ id: 1, message: 'Hello, World!' }]

root.render(
  <React.StrictMode>
    <Dashboard risksJson={risksJson} />
    <TickerTape messagesJson={messagesJson} />
    <Messages />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
