import React, { useState, useEffect } from 'react'

const App: React.VFC = () => {
  const [onoff, setOnoff] = useState(false)
  useEffect(() => {
    const listener = (message: string) => {
      if (message == 'center-highlight-onnoff') {
        setOnoff((preValue) => !preValue)
      }
    }
    chrome.runtime.onMessage.addListener(listener)
    return () => chrome.runtime.onMessage.removeListener(listener)
  }, [])

  return onoff ? (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        margin: 'auto',
        width: '100vm',
        height: '100px',
        background:
          'linear-gradient(rgba(255,255,255,0) 0%, rgba(128,128,128, 0.2) 10%, rgba(255,255,255,0) 50%, rgba(128,128,128,0.2) 90%, rgba(255,255,255,0) 100%)',
        zIndex: 2147483646,
        pointerEvents: 'none',
      }}
    />
  ) : (
    <></>
  )
}

export default App
