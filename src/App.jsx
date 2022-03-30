// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import Footer from "./components/footer"

import { Suspense } from 'react'
import {
  useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'

function App() {
  // const [count, setCount] = useState(0)

	return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
    )
}

export default App
