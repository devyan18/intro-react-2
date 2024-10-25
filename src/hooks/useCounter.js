import { useState } from "react"

export const useCounter = () => {

  const [counter, setCounter] = useState(0)

  const incrementar = () => {
    setCounter(counter + 1)
  }

  const decrementar = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return {counter, incrementar, decrementar, reset}
}