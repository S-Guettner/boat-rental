import { FC,useEffect,useState } from 'react'
import  {BoatData}  from '../interfaces'
import { Link } from 'react-router-dom'

interface HomeProps {
  
}

/* interface BoatData {
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
} */

const Dashboard: FC<HomeProps> = ({}) => {

  const [allBoatData,setAllBoatData] = useState<BoatData[]>([])
  const [bookedBoatData,setBookedBoatData] = useState<BoatData[]>([])

  useEffect(() => {
    fetch('http://localhost:9999/api/v1/all-boats')
    .then(res => res.json())
      .then((data: BoatData[] ) => {
      console.log(data)
      setAllBoatData(data)
    })
    fetch('http://localhost:9999/api/v1/booked-boats')
    .then(res => res.json())
    .then((data: BoatData[]) => {
      console.log(data)
      setBookedBoatData(data)
    })
  },[])

  

  return (
    <main>
      <h1>Home</h1>
      <p>All Boats: {allBoatData.length.toString()}</p>
      <p>Booked Boats: {bookedBoatData.length.toString()}</p>
      <p>Boats available: {(allBoatData.length - bookedBoatData.length).toString()}</p>
      <Link className='border-2 ' to={'/new-boat'} > Create newBoat</Link>
    </main>
  )
}

export default Dashboard