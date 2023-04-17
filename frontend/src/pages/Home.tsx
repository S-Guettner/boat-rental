import { FC,useEffect,useState } from 'react'

import { Link } from 'react-router-dom'

interface HomeProps {
  
}

interface BoatData {
  boatName: string,
  boatType: string,
  bookedStatus: boolean,
  constructionYear: string,
  createdAt: string,
  material: string,
  serialNumber: string,
  updatedAt:string,
  _v : number,
  _id: string
}

const Home: FC<HomeProps> = ({}) => {

  const [boatData,setBoatData] = useState<BoatData[]>([])

  useEffect(() => {
    fetch('http://localhost:9999/api/v1/all-boats')
    .then(res => res.json())
      .then((data: BoatData[] ) => {
      console.log(data)
      setBoatData(data)
    })
  },[])

  console.log(boatData.length)

  return (
    <main>
      <h1>Home</h1>
      <p>All Boats: {boatData.length.toString()}</p>
      <p></p>
      <Link className='border-2 ' to={'/new-boat'} > Create newBoat</Link>
    </main>
  )
}

export default Home