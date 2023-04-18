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
        fetch('http://localhost:9999/api/v1/new-boat', {
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
    <main>
        <h1>Add new BOAT</h1>
        <form>
              <input className='border-2 block' ref={boatName} placeholder='Boat Name' type="text" />
              <input className='border-2 block' ref={constructionYear} placeholder='Construction Year' type="number" />
              <input className='border-2 block' ref={material} placeholder='Material' type="text" />
              <input className='border-2 block' ref={serialNumber} placeholder='Serial-number' type="text" />
              <input className='border-2 block' ref={boatType} placeholder='Boat Type' type="text" />
              <button className='border-2 m-4 p-2 mb-10' onClick={clickHandler} >Submit</button>
        </form>
            <Link to={'/'} className='border-2 p-2'>Back to all boats </Link>
    </main>
  )
}

export default CreateNewBoat