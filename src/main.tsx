import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import configureStore from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
)
