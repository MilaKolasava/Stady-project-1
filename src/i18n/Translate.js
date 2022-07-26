import React from 'react'
import { FormattedMessage } from 'react-intl'

function Translate(id, value) {
  return (
    <FormattedMessage id={id} values={{...value}}/>
  )
}

export default Translate