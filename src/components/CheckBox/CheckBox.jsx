import React from "react";
import { useState } from "react";
import './CheckBox.css'

const CheckBox = ({ onFilter }) => {
  const [shorts, setShorts] = useState(true);
  return (
    <section className='checkbox'>
      <input
        type='checkbox'
        id='checkbox'
        className='checkbox__input'
        checked={shorts}
        onChange={() => { setShorts(!shorts) }}
      />
      <label
        htmlFor='checkbox'
        className='checkbox__togle'>Короткометражки</label>
    </section>
  )
}

export default CheckBox;