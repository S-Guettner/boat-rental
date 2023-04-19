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
    fetch('https://boat-rental-backend.vercel.app/api/v1/all-boats')
    .then(res => res.json())
      .then((data: BoatData[] ) => {
      console.log(data)
      setAllBoatData(data)
    })
    fetch('https://boat-rental-backend.vercel.app/api/v1/booked-boats')
    .then(res => res.json())
    .then((data: BoatData[]) => {
      console.log(data)
      setBookedBoatData(data)
    })
  },[])

  

  return (
    <main>
      <h1 className='text-2xl'>Dashboard</h1>
      <p>All Boats: {allBoatData.length.toString()}</p>
      <p>Booked Boats: {bookedBoatData.length.toString()}</p>
      <p className='mb-5'>Boats available: {(allBoatData.length - bookedBoatData.length).toString()}</p>
      <Link className='border-2 p-2 ' to={'/new-boat'} > Add new Boat</Link>
      <Link to={'/reservation'} className='inline-block p-2 m-4 border-2'>reservation</Link>
      <Link className='border-2 p-2' to={'/'} > Go back</Link>
    </main>
  )
}

export default Dashboard