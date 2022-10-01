import React from 'react'
import ReactDOM from 'react-dom/client'
import Turnstile from 'react-turnstile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p>This renders Turnstile twice:</p>
    <Turnstile sitekey='1x00000000000000000000AA' onVerify={() => {}}/>
  </React.StrictMode>
)
