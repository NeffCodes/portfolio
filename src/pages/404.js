import * as React from "react";
import Layout from '../components/layout/layout';
import { InternalButton } from "../components/button/Buttons";

const NotFoundPage = () => {
  return (
    <Layout pageTitle='Error 404'>
      <section>
        <div className='content'>
          <h1>Error 404 &#128543;</h1>
          <p>Uh-oh...could not find that page</p>
          <InternalButton destination='/' content='Send Me back'/>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
