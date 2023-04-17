import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { FC } from 'react'
import Dashboard from './pages/Dashboard'
import CreateNewBoat from './pages/CreateNewBoat'
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'


interface AppProps {
  
}

const App: FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/new-boat' element={<CreateNewBoat />} />
      <Route path='/details/:id' element={<DetailsPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App