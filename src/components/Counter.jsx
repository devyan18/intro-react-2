import { useCounterContext } from "../context/CounterProvider"

export const Counter = () => {

  const {incrementar, decrementar} = useCounterContext()

  return (
    <div>
      <button
        onClick={incrementar}
      >
        Incrementar
      </button>
      <button
        onClick={decrementar}
      >
        Decrementar
      </button>
    </div>
  ) 
}