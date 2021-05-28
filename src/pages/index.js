import * as React from "react"
import { Helmet } from 'react-helmet';
import App from './app';
import '../styles/main.css';


const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Persigio</title>
        <html lang='en'/>
        <meta name='description' content='Persigio Portfolio'/>
        <script src="https://kit.fontawesome.com/05e397c018.js" crossorigin="anonymous"></script>
      </Helmet>
      <App />
    </>
  )
}

export default IndexPage
