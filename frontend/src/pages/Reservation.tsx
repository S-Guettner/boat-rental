import { FC,useState,useEffect } from 'react'
import {BoatData} from '../interfaces'
import { Link } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'
import AvailableBoats from '../components/AvailableBoats'

interface ReservationProps {
  
}

const Reservation: FC<ReservationProps> = ({}) => {
  
    const [availableBoats, setAvailableBoats] = useState<BoatData[]>([])
    
    useEffect(() => {
        fetch('https://boat-rental-backend-mys76hkh3-s-guettner.vercel.app/api/v1/available-boats')
        .then(res => res.json())
        .then((data: BoatData[]) => {
            console.log(data) 
            setAvailableBoats(data)
        })
    },[])
    
    return (
    <div>
        <div>
        <h1 className='text-4xl text-center pt-4'>Reservation</h1>
        <p className='mb-4'>all available Boats :</p>
            {availableBoats?.map((item) => {
                console.log(item)
                return(
                   <AvailableBoats 
                    key={uuidv4()}
                        boatName={item.boatName}
                        boatType={item.boatType}
                        serialNumber={item.serialNumber}
                        id={item._id}
                   />
                )
            })}
        </div>
        <Link to={'/'}  className='border-2 p-2 m-4'>Back to Overview</Link>
    </div>
  )
}

export default Reservation