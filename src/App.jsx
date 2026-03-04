import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import NavBar from './components/NavBar.jsx'
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App