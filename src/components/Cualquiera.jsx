import { useContext } from "react"
import { CounterContext } from "../context/CounterProvider"

export const Cualquiera = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>{counter}</div>
  )
}