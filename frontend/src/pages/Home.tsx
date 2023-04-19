import { FC,useState,useEffect } from 'react'
import {BoatData} from '../interfaces'
import SingleBoat from '../components/SingleBoat'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

interface HomeProps {
  
}

const Home: FC<HomeProps> = ({}) => {
    
    const [allBoatData, setAllBoatData] = useState<BoatData[]>([])

    useEffect(() => {
        fetch('https://boat-rental-backend-mys76hkh3-s-guettner.vercel.app/api/v1/all-boats')
        .then(res => res.json())
        .then((data: BoatData[]) => {
            console.log(data)
            setAllBoatData(data)
        })
    },[])
  
    return (
    <main>
        <section className='shadow-md mb-4'>
                <img className='w-28' src="https://ik.imagekit.io/6sicju8qu/boat-logo-design_412311-3874.avif?updatedAt=1681908458914" alt="boat-logo" />
        </section>
        <div>
            {allBoatData?.map((boat) => {
                console.log(boat)
                return(
                   <SingleBoat 
                        key={uuidv4()}
                        boatId={boat._id}
                        boatName={boat.boatName}
                        boatType={boat.boatType}
                        constructionYear={boat.constructionYear}
                        bookedStatus={boat.bookedStatus}
                        bookedFrom={boat.bookedFrom}
                        bookedTo={boat.bookedTo}
                   /> 
                )
            })}
        </div>
        <Link to={'/new-boat'} className='inline-block p-2 m-4 border-2'>Add new Boat</Link>
        <Link to={'/reservation'} className='inline-block p-2 m-4 border-2'>reservation</Link>
        <Link to={'/dashboard'} className='inline-block p-2 m-4 border-2'>Dashboard</Link>

    </main>
  )
}

export default Home