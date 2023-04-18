import { FC } from 'react'

interface BoatDetailsProps {
    boatName: string
  
}

const BoatDetails: FC<BoatDetailsProps> = ({ boatName }) => {
  return (
    <div>
          <p>{boatName}</p>
    </div>
  )
}

export default BoatDetails