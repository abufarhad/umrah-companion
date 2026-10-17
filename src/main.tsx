import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './app/router'
import './i18n'
import { AudioProvider } from './audio/AudioProvider'
import { StoreProvider } from './state/store'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      {/* Above the router so playback survives navigation. */}
      <AudioProvider>
        <RouterProvider router={router} />
      </AudioProvider>
    </StoreProvider>
  </StrictMode>,
)
