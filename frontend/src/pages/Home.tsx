import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HomeProps {
  
}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <h1>Home</h1>
      <Link className='border-2 ' to={'/new-boat'} > Create newBoat</Link>
    </main>
  )
}

export default Home