import React from 'react'
import {pipe, forEach, toPairs} from 'ramda'

const body = document.body
const lockStyles = {
  overflow: 'hidden',
  height: '100%',
  position: 'relative',
  'box-sizing': 'border-box',
}

let originalStyles = {}
let locks = 0

export class ScrollLock extends React.Component {
  state = {foo: 'bar'}

  componentDidMount() {
    if (!locks) {
      const originalPaddingRight = body.style['padding-right']
        ? parseInt(body.style['padding-right'], 10)
        : 0

      // Calculate eventual sidebar width
      lockStyles['padding-right'] = `${window.innerWidth -
        body.clientWidth +
        originalPaddingRight}px`

      // Save original styles and apply styles to lock the scroll
      pipe(
        toPairs,
        forEach(([k, v]) => {
          originalStyles[k] = body.style[k]
          body.style[k] = v
        }),
      )(originalStyles)
    }

    lock++
  }
  componentWillUnmount() {
    locks--

    // Re-apply original styles
    if (!locks) {
      pipe(toPairs, forEach(([k, v]) => (body.style[k] = v)))(originalStyles)
    }
  }
  render = () => null
}
