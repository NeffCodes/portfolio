import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout/layout';

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>extension</th>
              <th>relativeDirectory</th>
              <th>prettySize</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>{node.extension}</td>
                <td>{node.relativeDirectory}</td>
                <td>{node.prettySize}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          relativeDirectory
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`