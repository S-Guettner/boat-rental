import { FC,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BoatData } from '../interfaces' 

import { v4 as uuidv4 } from 'uuid'

interface DetailsPageProps {
  
}

interface BoatObject {
    boatName: string,
    boatType: string,
    constructionYear: string,
    material: string,
    serialNumber: string,
    createdAt: string,
    bookedStatus: boolean
}

const DetailsPage: FC<DetailsPageProps> = ({}) => {
  

    const [detailsData, setDetailsData] = useState< BoatObject >()

    const {id} = useParams()
    
    useEffect(() => {
        fetch(`https://boat-rental-backend-mys76hkh3-s-guettner.vercel.app/api/v1/get-details/${id}`)
        .then(res => res.json())
            .then((data: BoatObject) => {
        console.log(data)
        setDetailsData(data)
        })
    }, [])

    return (
    <div>
            <p>Boat Name: {detailsData?.boatName}</p>
            <p>Boat boatType: {detailsData?.boatType}</p>
            <p>Boat constructionYear: {detailsData?.constructionYear}</p>
            <p>Boat material: {detailsData?.material}</p>
            <p>Boat serialNumber: {detailsData?.serialNumber}</p>
            <p>Boat createdAt: {detailsData?.createdAt}</p>
            <p className='mb-4'>Boat bookedStatus: {detailsData?.bookedStatus.toString()}</p>
            <Link to={'/'} className='border-2 p-2'>Go Back</Link>
    </div>
  )
}

export default DetailsPage