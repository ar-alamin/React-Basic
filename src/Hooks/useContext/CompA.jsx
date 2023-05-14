// parent Component
import React, { Component } from 'react'
import CompB from './CompB'
export const Name = React.createContext();
export const Age = React.createContext();

function CompA() {
  return (
    <div>
        <Name.Provider value='Abdur Rahman Al Amin'>
            <Age.Provider value={24}>
                <CompB />
            </Age.Provider>
        </Name.Provider>
    </div>
  )
}

export default CompA