import { useEffect } from "react";
import React from 'react'

const SelectTalle = ({setTalle, options}) => {

    const handleSelect = (e) => {
        setTalle(e.target.value)
      }

      useEffect(() => {
        setTalle(options[0].value)
      }, [])
    
  return (
    <select onChange={handleSelect}>
        {
            options.map((opt) => (
                <option value={opt.value} key={opt.value} >{opt.label}</option>
            ))
        }
    </select>
  )
}

export default SelectTalle