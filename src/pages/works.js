import * as React from "react"
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

import '../styles/works.css';

export default function WorksPage({ data }) {
    // console.log(data);
    // const projectCount = data.allMarkdownRemark.totalCount;
    const imageData = data.markdownRemark.frontmatter;
    return(
        <Layout pageTitle='Portfolio'>
            <section className="portfolio">
                {/* <h1>Behold! My stuff</h1> */}
                {/* <h4>{ projectCount } Project{ projectCount !== 1 ? 's':null }</h4> */}
                <ul>
                { data.allMarkdownRemark.edges.map( ({node}) => {
                    return(
                        <li key={ node.id } className='projectTile'>
                          <Link to={ node.fields.slug }>
                            <article>
                              <div>
                                <h1>{ node.frontmatter.title }</h1>
                                <div className='tags'>
                                  { node.frontmatter.tags.map( tag => {
                                      return(
                                          <h3 key={`${node.id}-${tag}`}>{tag}</h3>
                                      )
                                  })}
                                </div>
                                <p>{ node.frontmatter.description }</p>
                              </div>
                              <GatsbyImage image={imageData.featuredImage.childImageSharp.gatsbyImageData} alt={imageData.imageAlt}/>
                            </article>
                          </Link>
                        </li>
                    )
                })}
                </ul>
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
          id
          frontmatter {
            title
            tags
            description
          }
          fields {
            slug
          }
        }
      }
    }
    markdownRemark {
      frontmatter {
        imageAlt
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              aspectRatio: 2
            )
          }
        }
      }
    }
  }  
`