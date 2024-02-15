import * as React from 'react'
import { createRoot } from 'react-dom/client'
import ExampleComponent from './Component.jsx'

let Container = () =>
  (<div>
    <h1>Component testing initiated</h1>
    <ExampleComponent />
  </div>)

const root = createRoot(document.getElementById('root'));
root.render(<Container />);


