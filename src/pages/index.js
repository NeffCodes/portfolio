import * as React from "react"
import { Helmet } from 'react-helmet';

import '../styles/main.css';
import Nav from '../components/nav/nav';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Persigio</title>
        <html lang='en'/>
        <meta name='description' content='Persigio Portfolio'/>
      </Helmet>
      
      <Nav />
    </>
  )
}

export default IndexPage
