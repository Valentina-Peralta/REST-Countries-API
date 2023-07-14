import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Details from './components/Details'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}>
      </Route>
      <Route path=':index' element={<Details />} />


    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
