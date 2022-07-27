import React from 'react'
import { Switch } from './Switch'

export const Header = () => {
  return (
    <header className='App-header py-10 flex justify-between max-w-screen-lg m-auto items-center px-8'>
      <h1>Fabrizio Signoretta</h1>
      <Switch />
    </header>
  )
}
