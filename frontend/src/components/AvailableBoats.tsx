import { FC,useRef} from 'react'

interface AvailableBoatsProps {
    boatName:string,
    boatType:string,
    serialNumber:string
}

const AvailableBoats: FC<AvailableBoatsProps> = ({ boatName, boatType, serialNumber  }) => {
  

    const bookedFrom = useRef<HTMLInputElement>(null)
    const bookedTo = useRef<HTMLInputElement>(null)


    const clickHandler = () => {

    }
  
  
    return (
    <div className='border-2 inline-block p-2'>
          <p>Name:{boatName}</p>
          <p>Type:{boatType}</p>
          <p>serialNumber:{serialNumber}</p>
            <form>
                <label className='block' htmlFor="from">Book from: </label>
                <input ref={bookedFrom} type="date" name="from" id="" />
                <label className='block' htmlFor="to">To: </label>
                <input ref={bookedTo} className='block' type="date" name="to" id="" />
                <button onClick={clickHandler} className='border-2'>Submit reservation</button>
            </form>
    </div>
  )
}

export default AvailableBoats