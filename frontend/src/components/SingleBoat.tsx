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
    <div className='flex gap-6 justify-between items-center px-10 border-b-2'>
          <p className='w-72'>{boatName}</p>
          <p className='w-72'>type: {boatType}</p>
          <p className='w-72'>Construction year: {constructionYear}</p>
          <p className='w-72'>{bookedStatus ? "Booked from:" +" "+ bookedFrom +" "+"to"+ " " +bookedTo : "" }</p>
          <Link className='border-2 my-2 p-1 rounded-2xl' to={`/details/${boatId}`}>To details</Link>
    </div>
  )
}

export default SingleBoat