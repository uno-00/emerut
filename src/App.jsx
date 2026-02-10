import { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import ProposalPage from './components/ProposalPage'
import InvitationPage from './components/InvitationPage'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [saidYes, setSaidYes] = useState(false)

  if (showSplash) {
    return <SplashScreen onDone={() => setShowSplash(false)} />
  }

  return (
    <>
      {saidYes ? (
        <InvitationPage />
      ) : (
        <ProposalPage onYes={() => setSaidYes(true)} />
      )}
    </>
  )
}

export default App
