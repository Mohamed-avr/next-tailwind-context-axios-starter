import '@/styles/globals.css'
import AppContext from '../../components/appContext'

export default function App({ Component, pageProps }) {

  const data = [
    {
      "author": "mohamed",
      "posts": 43
    }
  ]

  return (
    <AppContext.Provider value={{data}}>
      <Component {...pageProps} />
    </AppContext.Provider>)

}
