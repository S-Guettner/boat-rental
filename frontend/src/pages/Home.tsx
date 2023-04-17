import { FC,useState,useEffect } from 'react'
import {BoatData} from '../interfaces'
import SingleBoat from '../components/SingleBoat'
import { v4 as uuidv4 } from 'uuid'

interface HomeProps {
  
}

const Home: FC<HomeProps> = ({}) => {
    
    const [allBoatData, setAllBoatData] = useState<BoatData[]>([])

    useEffect(() => {
        fetch('http://localhost:9999/api/v1/all-boats')
        .then(res => res.json())
        .then((data: BoatData[]) => {
            console.log(data)
            setAllBoatData(data)
        })
    },[])
  
    return (
    <main>
            {allBoatData?.map((boat) => {
                
                return(
                   <SingleBoat 
                        key={uuidv4()}
                        boatId={boat._id}
                        boatName={boat.boatName}
                        boatType={boat.boatType}
                        constructionYear={boat.constructionYear}
                        bookedStatus={boat.bookedStatus}

                   /> 
                )
            })}
    </main>
  )
}

export default Home