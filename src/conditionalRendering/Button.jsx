import React, { Component } from 'react'
import styles from './Button.module.css'

export default class Button extends Component {
  render() {
    const { locale, change } = this.props;
    return (
      <div>
        <button type='button' onClick={()=> change(locale)}>
            {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
        </button>
      </div>
    )
  }
}
