import { FC,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { BoatData } from '../interfaces' 
import BoatDetails from '../components/BoatDetails'
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
        fetch(`http://localhost:9999/api/v1/get-details/${id}`)
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
            <p>Boat bookedStatus: {detailsData?.bookedStatus.toString()}</p>
            
    </div>
  )
}

export default DetailsPage