import * as React from "react"
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function WorksPage({ data }) {
    const page = data.allMarkdownRemark;
    
    return(
        <Layout pageTitle='Portfolio'>
            <section className="portfolio">
              <div className='content'>
                <ul className='port-list'>
                {page.edges
                  .filter( ({node}) => node.frontmatter.title !== 'Example')
                  .map( ({node}) => {
                    const front = node.frontmatter;
                    return(
                        <li key={ node.id } className='project-tile'>
                          <Link to={ node.fields.slug }>
                            <article className='project'>
                              <div>
                                <h1 className='project-title'>{ front.title }</h1>
                                <div className='tags'>
                                  { front.tags.map( tag => {
                                      return(
                                          <h3 key={`${node.id}-${tag}`} className='tag'>{tag}</h3>
                                      )
                                  })}
                                </div>
                                <p className='project-description'>{ front.description }</p>
                              </div>
                              {front.featuredImage && (
                                <GatsbyImage 
                                  image={front.featuredImage.childImageSharp.gatsbyImageData} 
                                  alt={front.imageAlt} 
                                  className='project-img'
                                />
                              )}
                            </article>
                          </Link>
                        </li>
                    )
                })}
                </ul>
              </div>
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
                transformOptions: {fit: CONTAIN, cropFocus: NORTH}
                placeholder: BLURRED
                backgroundColor: "transparent"
              )
            }
          }
        }
      }
    }
  }
}
`