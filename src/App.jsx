import { Counter } from "./components/Counter";
import { ViewCounter } from "./components/ViewCounter";
import { CounterProvider, useCounterContext } from "./context/CounterProvider";

export default function App() {

  return (
    <CounterProvider>
      <div>
        <Counter />
        <ViewCounter />
      </div>
    </CounterProvider>
  )
}