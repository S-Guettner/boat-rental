import { FC,useRef,useState} from 'react'

interface AvailableBoatsProps {
    boatName:string,
    boatType:string,
    serialNumber:string,
    id:string
}

const AvailableBoats: FC<AvailableBoatsProps> = ({ boatName, boatType, serialNumber, id  }) => {
  

    const bookedFrom = useRef<HTMLInputElement>(null)
    const bookedTo = useRef<HTMLInputElement>(null)




    const clickHandler = () => {
        //change bookedStatus
        fetch(`http://localhost:9999/api/v1/set-booking-status` , {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify
            (
                {
                    "id":id
                }
            )
        })

            fetch(`http://localhost:9999/api/v1/set-booking-date` , {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify
                (
                    {
                        "id":id,
                        "bookedFrom": bookedFrom.current?.value,
                        "bookedTo": bookedTo.current?.value
      
                        
                    }
                )
            })



        
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