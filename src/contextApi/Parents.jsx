import React, { Component } from 'react'
import Childs from './Childs';
export const FirstName = React.createContext();
export const LastName = React.createContext();
export const Age = React.createContext();

export default class Parents extends Component {
  render() {
    return (
      <div>
        <FirstName.Provider value='Abdur Rahman'>
            <LastName.Provider value='Al Amin'>
                <Age.Provider value={24}>
                    <Childs  />
                </Age.Provider>
            </LastName.Provider>
        </FirstName.Provider>
      </div>
    )
  }
}
