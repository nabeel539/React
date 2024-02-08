import UserConextProvider from './context/UserConextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserConextProvider>
      <h1>React | Context API</h1>
       <Login/>
       <Profile/>
    </UserConextProvider>
  )
}

export default App
