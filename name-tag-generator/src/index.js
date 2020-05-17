import React, { useState } from 'react';
import { render } from 'react-dom';
import NameTag from './NameTag';
import Thanks from './Thanks';
import './style.css';

const App = () => {
  let title;

  const [showTag, setShowTag] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [tagInfo, setTagInfo] = useState({
    nickname: null,
    age: null,
    animal: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const nickname = data.get('nickname')
    const age = Number(data.get('age'))
    const animal = data.get('animal')

    setTagInfo({
      nickname,
      age,
      animal
    })

    setShowThanks(false)
    setShowTag(true)
  }

  const complete = () => {
    setShowTag(false)
    setShowThanks(true)
  }

  const setTitle = () => {
    title = 'Zoo Nametage Generator'
  }

  setTitle()

  return (
    <div>
      <h3>{ title }</h3>
      <form onSubmit={(e) => handleSubmit(e) }>
        <input type="text" name="nickname" placeholder="nickname" />
        <input type="number" name="age" placeholder="age" />
        <input type="text" name="animal" placeholder="favorite  animal" />
        <button type="submit">
          Generate Nametag
        </button>
      </form>
      {
        showTag && <NameTag tagInfo={ tagInfo } complete={complete} />
      }
      {
        showThanks && <Thanks />
      }
    </div>
  )
}

render(
  <App/>,
  document.getElementById('root')
);