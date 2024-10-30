import { useCounterContext } from "../context/CounterProvider"
import { Cualquiera } from "./Cualquiera"

export const ViewCounter = () => {

  const { counter } = useCounterContext()
  
  return (
    <div>{ counter }
      <Cualquiera />
    </div>
  )
}