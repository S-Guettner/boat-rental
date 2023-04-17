import { FC } from 'react'

interface interfacesProps {
  
}

export interface BoatData {
    boatName: string,
    boatType: string,
    bookedStatus: boolean,
    constructionYear: string,
    createdAt: string,
    material: string,
    serialNumber: string,
    updatedAt: string,
    _v: number,
    _id: string
}



const interfaces: FC<interfacesProps> = ({}) => {
  return <div>interfaces</div>
}

export default interfaces