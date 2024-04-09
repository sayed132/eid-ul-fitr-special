
import './custom.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Route'

function App() {

  return (
   <div className='mx-3  custom p-2 rounded-sm'>
    <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
