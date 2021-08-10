import * as React from "react"
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

import '../styles/works.css';

export default function WorksPage({ data }) {
    const page = data.allMarkdownRemark;
    
    return(
        <Layout pageTitle='Portfolio'>
            <section className="portfolio">
                <ul>
                { page.edges
                  .filter( ({node}) => node.frontmatter.title !== 'Example')
                  .map( ({node}) => {
                    const front = node.frontmatter;
                    return(
                        <li key={ node.id } className='projectTile'>
                          <Link to={ node.fields.slug }>
                            <article>
                              <div>
                                <h1>{ front.title }</h1>
                                <div className='tags'>
                                  { front.tags.map( tag => {
                                      return(
                                          <h3 key={`${node.id}-${tag}`}>{tag}</h3>
                                      )
                                  })}
                                </div>
                                <p>{ front.description }</p>
                              </div>
                              {front.featuredImage && <GatsbyImage image={front.featuredImage.childImageSharp.gatsbyImageData} alt={front.imageAlt}/>}
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
  allMarkdownRemark (sort: {fields: frontmatter___date, order: ASC}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          imageAlt
          description
          tags
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                transformOptions: {fit: COVER}
                placeholder: BLURRED
                width: 512
          )
            }
          }
        }
      }
    }
  }
}
`