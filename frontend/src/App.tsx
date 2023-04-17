import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { FC } from 'react'
import Home from './pages/Home'

interface AppProps {
  
}

const App: FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App