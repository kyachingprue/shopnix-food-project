import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { store } from './store/store'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2500,
            style: {
              borderRadius: '12px',
              background: '#174c37',
              color: '#fff',
              padding: '14px 18px'
            },
            success: {
              iconTheme: {
                primary: '#b78a35',
                secondary: '#fff'
              }
            }
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
)
