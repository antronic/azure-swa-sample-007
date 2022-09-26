import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

interface IProps {}

const AddTodo: React.FC<IProps> = (props) => {
  const [number, setNumber] = useState('')

  function handleInputChange(e: any) {
    setNumber(e.target.value)
  }

  async function addNumber() {
    await axios.post('/api/AddNumber', { number })
  }

  return (
    <div className="space-x-2">
      <input
        type="text"
        onChange={handleInputChange}
        className="bg-slate-50 px-4 py-2 text-slate-800 rounded-md placeholder:text-slate-300 font-prompt shadow-md"
        placeholder="ใส่เลขที่เห็นจากนิมิต..."
      />

      <button
        className="px-6 py-2 shadow-md bg-slate-500 hover:bg-slate-700 hover:shadow rounded-lg font-prompt"
        onClick={addNumber}
      >
          สาธุ
      </button>
    </div>
  )
}

export default AddTodo