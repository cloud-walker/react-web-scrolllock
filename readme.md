# React Web ScrollLock Component

Simple react component that will prevent `document.body` from scroll, useful to compose with components that needs a fixed body to work at best, like a modal for example.

## Install

```
yarn add @cloudwalker/react-web-scrolllock
```

## Usage

```javascript
import React, {Fragment} from 'react'
import {createPortal} from 'react-dom'
import {ScrollLock} from '@cloudwalker/react-web-scrolllock'

export class Modal extends React.Component {
  render = () =>
    createPortal(
      <Fragment>
        <ScrollLock />

        <h1>Awesome Modal</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          ad fugit consequuntur iure pariatur dolores vitae, perspiciatis sequi
          earum, tenetur, voluptates vero impedit officia ullam iusto repellat.
          Labore, tempore, fuga.
        </p>
        <p>
          Fugiat quis nostrum expedita, architecto qui mollitia rerum voluptates
          officia temporibus sit. Natus architecto reprehenderit officia
          repellat inventore at aut reiciendis explicabo mollitia. Ipsa,
          dignissimos voluptate rerum consequuntur saepe voluptatem.
        </p>
      </Fragment>,
      document.getElementById('modal'),
    )
}
```
