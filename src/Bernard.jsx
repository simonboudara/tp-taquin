import {createSignal } from "solid-js"

export default function Bernard({ number }) {
    let [counter, setCounter] = createSignal(number)

    return (
      <p onClick={() => { setCounter(counter() + 1 )}} class="text-4xl text-white w-16 text-center bg-blue-300 border-8 flex-2">{counter()}</p>
    )
  }

export function BernardBase({ number }) {
    return (
      <p class="">{number}</p>
    )
  }
