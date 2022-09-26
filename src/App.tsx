import axios from 'axios'
import { useEffect, useState } from 'react'
import WebFont from 'webfontloader'

import './App.css'
import AddTodo from './components/AddNumber'
import NumberCard from './components/NumberCard'

function App() {
  const [numberList, setNumberList] = useState<any[]>([
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
    { MyNumber: '12345' },
  ])

  useEffect(() => {
    WebFont.load({ google: { families: ['Prompt'] } })
    getAllNumbers()
  }, [])

  const listNumbers = () => {
    return numberList.map((num, index) => (
      <NumberCard
        key={`num-card-${index}`}
        number={num.MyNumber.toString()}
        />
    ))
  }

  async function getAllNumbers() {
    const result = await axios.get('/api/GetAllNumbers')

    setNumberList(result.data.lists)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl mb-12">Tell me a number</h1>
        <AddTodo onDone={getAllNumbers}/>

        <div className="h-px w-3/6 bg-gradient-to-r from-transparent via-slate-50 to-transparent my-6 mx-auto"/>

        <div className="h-96 overflow-auto">
          {listNumbers()}
        </div>
      </header>
    </div>
  )
}

export default App
