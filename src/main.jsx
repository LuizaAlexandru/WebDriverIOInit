import * as React from 'react'
import * as Server from 'react-dom/server'
import ExampleComponent from './Component.jsx'

let Container = () =>
  (<div>
    <h1>Component testing initiated</h1>
    <ExampleComponent />
  </div>)

console.log(Server.renderToString(<Container />))
