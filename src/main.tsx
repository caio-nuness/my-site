import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './assets/css/media-query.css'
import './assets/css/pageprojects-mobile.css'
import './assets/css/pagecontact-mobile.css'
import './assets/css/pageabout-mobile.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
