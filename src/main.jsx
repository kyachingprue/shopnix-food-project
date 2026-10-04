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
          gutter={10}
          containerStyle={{
            zIndex: 99999
          }}
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '12px',
              background: '#174c37',
              color: '#fff',
              padding: '14px 18px',
              zIndex: 99999
            },
            success: {
              duration: 2500,
              iconTheme: {
                primary: '#b78a35',
                secondary: '#fff'
              }
            },
            error: {
              duration: 3500
            },
            loading: {
              duration: Infinity
            }
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
)
