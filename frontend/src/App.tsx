import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { FC } from 'react'
import Home from './pages/Home'
import CreateNewBoat from './pages/CreateNewBoat'


interface AppProps {
  
}

const App: FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new-boat' element={<CreateNewBoat />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App