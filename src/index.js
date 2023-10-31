import { BrowserRouter } from "react-router-dom"
import * as ReactDOM from "react-dom/client";
import App from "./components/App/App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
