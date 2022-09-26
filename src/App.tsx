import { useEffect, useState } from 'react'
import WebFont from 'webfontloader'

import './App.css'
import AddTodo from './components/AddNumber'
import NumberCard from './components/NumberCard'

function App() {
  const [numberList, setNumberList] = useState<any[]>([
    { num: '123123' },
  ])

  useEffect(() => {
    WebFont.load({ google: { families: ['Prompt'] } })
  }, [])

  const listNumbers = () => {
    return numberList.map((num, index) => (
      <NumberCard
        key={`num-card-${index}`}
        number={num.num.toString()}
        />
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo/>

        <div className="h-px w-3/6 bg-gradient-to-r from-transparent via-slate-50 to-transparent my-6 mx-auto"/>

        <div className="">
          {listNumbers()}
        </div>
      </header>
    </div>
  )
}

export default App
