import { FC,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

interface DetailsPageProps {
  
}

const DetailsPage: FC<DetailsPageProps> = ({}) => {
  

    const [detailsData,setDetailsData] = useState([])

    const {id} = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:9999/api/v1/get-details/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDetailsData(data)
        })
    },[])

    return (
    <div>
        <p>{}</p>
    </div>
  )
}

export default DetailsPage