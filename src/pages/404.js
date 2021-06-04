import * as React from "react";
import Layout from '../components/layout/layout';
import { InternalButton } from "../components/button/internalButton";

const NotFoundPage = () => {
  return (
    <Layout pageTitle='404'>
      <section>
        <h1>Took a wrong turn</h1>
        <p>Uh-oh...</p>
        <p>Looks like you got a little lost</p>
        <InternalButton destination='/' content='Send Me back'/>
      </section>
    </Layout>
  )
}

export default NotFoundPage
