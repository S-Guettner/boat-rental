import { FC } from 'react'
import { Link } from 'react-router-dom'

interface SingleBoatProps {
    boatName:string,
    boatType:string,
    constructionYear:string,
    bookedStatus:boolean,
    boatId:string,
    bookedFrom:string,
    bookedTo:string

}

const SingleBoat: FC<SingleBoatProps> = ({ boatName, boatType, constructionYear, bookedStatus, boatId ,bookedFrom,bookedTo }) => {

    return (
    <div className='flex gap-6'>
          <p>{boatName}</p>
          <p>type: {boatType}</p>
          <p>Construction year: {constructionYear}</p>
          <p>{bookedStatus ? "Booked from:" +" "+ bookedFrom +" "+"to"+ " " +bookedTo : "" }</p>
          <Link className='border-2 bg-orange-500' to={`/details/${boatId}`}>To details</Link>
    </div>
  )
}

export default SingleBoat