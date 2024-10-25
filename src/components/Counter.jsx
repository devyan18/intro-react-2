import { useCounter } from "../hooks/useCounter"

export const Counter = () => {

  const {counter, incrementar} = useCounter()

  return (
    <div>
      <button
        onClick={incrementar}
      >
        clicks: {counter} 
      </button>
    </div>
  ) 
}