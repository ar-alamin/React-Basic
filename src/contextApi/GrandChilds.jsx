import React, { Component } from 'react'
import { FirstName, LastName, Age } from './Parents'

export default class GrandChilds extends Component {
  render() {
    return (
      <div>
        <FirstName.Consumer>
        {(fname)=> {
                return (
                    <LastName.Consumer>
                        {(lname)=> {
                            return (
                                <Age.Consumer>
                                    {(age)=>{
                                        return (
                                            <h2>{fname} {lname} <br /> {age}</h2>
                                        )
                                    }}
                                </Age.Consumer>
                            )
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
      </div>
    )
  }
}
