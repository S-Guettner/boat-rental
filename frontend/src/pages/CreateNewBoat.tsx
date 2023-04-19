import { FC , useRef} from 'react'
import { Link } from 'react-router-dom'


interface CreateNewBoatProps {
  
}


const CreateNewBoat: FC<CreateNewBoatProps> = ({}) => {
  
    const boatName = useRef<HTMLInputElement>(null)
    const constructionYear = useRef<HTMLInputElement>(null)
    const material = useRef<HTMLInputElement>(null)
    const serialNumber = useRef<HTMLInputElement>(null)
    const boatType = useRef<HTMLInputElement>(null)
  
  
    const clickHandler = () => {
        fetch('https://boat-rental-backend-mys76hkh3-s-guettner.vercel.app/api/v1/new-boat', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify
                (
                    {
                        "boatName": boatName.current?.value,
                        "constructionYear": (constructionYear.current?.value)?.toString(),
                        "material": material.current?.value,
                        "serialNumber": serialNumber.current?.value,
                        "boatType": boatType.current?.value,
                        "bookedFrom":"",
                        "bookedTo":"",

                    }
                )
        })
    }
  
  
  
    return (
    <main >
        <h1 className='text-center text-4xl mb-20 pt-4'>Add new Boat</h1>
            <div className='w-48 mx-auto'>
              <input className='border-2 block w-48' ref={boatName} placeholder='Boat Name' type="text" />
              <input className='border-2 block w-48' ref={constructionYear} placeholder='Construction Year' type="number" />
              <input className='border-2 block w-48' ref={material} placeholder='Material' type="text" />
              <input className='border-2 block w-48' ref={serialNumber} placeholder='Serial-number' type="text" />
              <input className='border-2 block w-48' ref={boatType} placeholder='Boat Type' type="text" />
              <button className='border-2 mt-2 mb-10 w-48' onClick={clickHandler} >Submit</button>
            </div>
        
            <Link to={'/'} className='border-2 p-2 m-4'>Back to all boats </Link>
    </main>
  )
}

export default CreateNewBoat