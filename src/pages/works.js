import * as React from "react"
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function WorksPage({ data }) {
    console.log(data);
    const projectCount = data.allMarkdownRemark.totalCount;

    return(
        <Layout pageTitle='Portfolio'>
            <section>
                <h1>Behold! My stuff</h1>
                {/* <p>Just kidding. Still currently WIP, nothing to show yet.</p> */}

                <h4>{ projectCount } Project{ projectCount !== 1 ? 's':null }</h4>
                { data.allMarkdownRemark.edges.map( ({node}) => {
                    return(
                        <div key={ node.id }>
                            <h3>{ node.frontmatter.title }</h3>
                            { node.frontmatter.tags.map( tag => {
                                return(
                                    <h4>{tag}</h4>
                                )
                            })}
                            <p>{ node.frontmatter.description }</p>
                            <GatsbyImage image={data.markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData}/>
                        </div>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
query works {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
            description
          }
        }
      }
    }
    markdownRemark {
      frontmatter {
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
  
`