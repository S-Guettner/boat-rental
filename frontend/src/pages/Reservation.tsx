import { FC,useState,useEffect } from 'react'
import {BoatData} from '../interfaces'

import { v4 as uuidv4 } from 'uuid'
import AvailableBoats from '../components/AvailableBoats'

interface ReservationProps {
  
}

const Reservation: FC<ReservationProps> = ({}) => {
  
    const [availableBoats, setAvailableBoats] = useState<BoatData[]>([])
    
    useEffect(() => {
        fetch('http://localhost:9999/api/v1/available-boats')
        .then(res => res.json())
        .then((data: BoatData[]) => {
            console.log(data) 
            setAvailableBoats(data)
        })
    },[])
    
    return (
    <div>
        <p>Reservation</p>
        <p>all available Boats :</p>
            {availableBoats?.map((item) => {
                console.log(item)
                return(
                   <AvailableBoats 
                    key={uuidv4()}
                        boatName={item.boatName}
                        boatType={item.boatType}
                        serialNumber={item.serialNumber}
                   />
                )
            })}

    </div>
  )
}

export default Reservation