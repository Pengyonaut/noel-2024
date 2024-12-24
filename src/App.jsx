import AppRoutes from './routes'
import Navbar from "./components/Navbar/Navbar"
import Cryptex from './components/Cryptex/Cryptex'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import SnowFallEffect from './components/SnowfallEffect/SnowFallEffect'
import "./custom.scss"


function App() {

  return (
    
     <div>
       <LoadingScreen></LoadingScreen>
       <SnowFallEffect></SnowFallEffect>
      <Navbar></Navbar>
      <AppRoutes />
      <Cryptex></Cryptex>
    </div>
  )
}

export default App
