import Highlight from './highlight'
import React from 'react'
import stringify from './stringify'
import { colors } from './config'

export default function Colors() {
  return (
    <div>
      <h4 id="colors-usage">Usage</h4>
      <Highlight lang="js">{`import euphoria from 'euphoria'
import { css } from 'glamor'

euphoria.colors(${stringify(
        colors
      )}).map(rule => css.insert(rule))`}</Highlight>

      <h3 id="colors-text">Text Colors</h3>
      {Object.keys(colors).map((k, i) => (
        <div className={`mb-sm text-${k}`} key={i}>
          Div with the class <code>.text-{k}</code>.
        </div>
      ))}

      <h3 id="colors-background">Background Colors</h3>
      {Object.keys(colors).map((k, i) => (
        <div className={`mb-sm px-xs py-xxs bg-${k}`} key={i}>
          Div with the class <code>.bg-{k}</code>.
        </div>
      ))}
    </div>
  )
}
