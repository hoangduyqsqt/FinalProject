import {createBrowserRouter} from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
    { 
      path:"/",
      
      elenment: <App/>
    }
])

export default router