import { createContext, useContext } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {

  const { counter, decrementar, incrementar } = useCounter()


  const reset = () => {
    dispatch("reset")
  }

  return (
    <CounterContext.Provider value={{}} >
      {children}
    </CounterContext.Provider>
  )
}

export const useCounterContext = () => useContext(CounterContext)