import { useState } from 'react'
import Style from './app.module.scss'
import Display from './components/display/display'

function App() {
  const [States, setStates] = useState([
    {
        "active" : false,
        "id": 0
    },
    {
        "active" : false,
        "id": 1
    },
    {
        "active" : false,
        "id": 2
    },
    {
        "active" : false,
        "id": 3
    },
    {
        "active" : false,
        "id": 4
    },
    {
        "active" : false,
        "id": 5
    },
    {
        "active" : false,
        "id": 6
    }])

  return (
    <div className={Style.content}>
      <Display 
        States={States}
        setStates={setStates}
      />

      <h1>b`1{States.map((state) => (state.active? 0 : 1)).reverse()}`</h1>
    </div>
  )
}

export default App
