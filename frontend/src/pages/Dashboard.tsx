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
    fetch('https://boat-rental-backend-mys76hkh3-s-guettner.vercel.app/api/v1/all-boats')
    .then(res => res.json())
      .then((data: BoatData[] ) => {
      console.log(data)
      setAllBoatData(data)
    })
    fetch('https://boat-rental-backend-mys76hkh3-s-guettner.vercel.app/api/v1/booked-boats')
    .then(res => res.json())
    .then((data: BoatData[]) => {
      console.log(data)
      setBookedBoatData(data)
    })
  },[])

  

  return (
    <main>
      <h1 className='text-4xl text-center pt-4 mb-36'>Dashboard</h1>
      <div className='flex justify-around items-center mb-24'>
      <p className='border-2 p-2 rounded-lg text-2xl'>All Boats: {allBoatData.length.toString()}</p>
      <p className='border-2 p-2 rounded-lg text-2xl'>Booked Boats: {bookedBoatData.length.toString()}</p>
      <p className='mb-5 border-2 p-2 rounded-lg text-2xl'>Boats available: {(allBoatData.length - bookedBoatData.length).toString()}</p>
      </div>
      <div className='flex items-center justify-center'>
      <Link className='border-2 p-2 ' to={'/new-boat'} > Add new Boat</Link>
      <Link to={'/reservation'} className='inline-block p-2 m-4 border-2'>reservation</Link>
      <Link className='border-2 p-2' to={'/'} > Go back</Link>
      </div>
    </main>
  )
}

export default Dashboard