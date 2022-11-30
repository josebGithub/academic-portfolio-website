import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import React from 'react';
import App from './App'
import './assets/css/main.css'

{ /*import ReactDOM from 'react-dom' -- not support for React 18 */}
 {/* ReactDOM.render(<App/>, document.querySelector("#root")); --not support for React 18 */}

 const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);



