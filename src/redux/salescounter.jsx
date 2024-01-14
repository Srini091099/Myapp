import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./sale"

export function salescounter(){
    const count=useSelector((state)=>state.counter.value) 
    const dispatch=useDispatch()
    return(
       
        <>
        <div>
            <div>
                <button>
                    <span>{count}</span>
                </button>
                <button onClick={()=>dispatch(increment())}>
                    increment
                </button>
                <button onClick={()=>dispatch(decrement())}>
                    decrement
                </button>
            </div>
        </div>
        </>
    )
}