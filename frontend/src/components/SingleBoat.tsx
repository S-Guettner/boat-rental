import { FC } from 'react'
import { Link } from 'react-router-dom'

interface SingleBoatProps {
    boatName:string,
    boatType:string,
    constructionYear:string,
    bookedStatus:boolean,
    boatId:string
}

const SingleBoat: FC<SingleBoatProps> = ({ boatName, boatType, constructionYear, bookedStatus, boatId }) => {
    console.log(boatId)
    return (
    <div className='flex gap-6'>
          <p>name of the boat: {boatName}</p>
          <p>type of the boat: {boatType}</p>
          <p>year: {constructionYear}</p>
          <p>{bookedStatus.toString()}</p>
          <p></p>
          <p></p>
            <Link className='border-2 bg-orange-500' to={`/details/${boatId}`}>To details</Link>
    </div>
  )
}

export default SingleBoat