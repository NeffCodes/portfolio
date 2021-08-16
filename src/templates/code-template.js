import React from "react";
import { graphql, Link } from 'gatsby';
import { ExternalButton, ExternalSecondaryButton } from '../components/button/Buttons';

import Layout from '../components/layout/layout';

export default function TestPost({ data }) {
  const post = data.markdownRemark;

  const currentNode = data.allMarkdownRemark.edges.filter( edge => edge.node.frontmatter.title === post.frontmatter.title)[0];
  const next = currentNode.next;
  const previous = currentNode.previous;
  
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <section className='project-page'>
        <div className='content'>
          <h1>{post.frontmatter.title}</h1>
          <div className='tags'>
            { post.frontmatter.tags.map( tag => {
                return(
                    <h3 key={`${post.id}-${tag}`} className='tag'>{tag}</h3>
                )
            })}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} className='md'/>
          <div>
            {post.frontmatter.mainLink && <ExternalButton destination={post.frontmatter.mainLink} content='See Live'/>}
            {post.frontmatter.sourceLink && <ExternalSecondaryButton destination={post.frontmatter.sourceLink} content='Source' icon='code'/>}
          </div>
        </div>
      </section>
      <div className='node-navigation'>
        {previous && (<Link to={ previous.fields.slug } className='previous node'>
          <i class="fas fa-arrow-left"></i>
          <span className='node-text'>{previous.frontmatter.title}</span>
        </Link>)}
        {next && (<Link to={ next.fields.slug } className='next node'>
          <span className='node-text'>{next.frontmatter.title}</span>
          <i class="fas fa-arrow-right"/>
        </Link>)}
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  allMarkdownRemark (
    filter: {frontmatter: {title: {ne:"Example"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ){
    edges {
      node {
        frontmatter {
          title
        }
      }
      next {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
      previous {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    id
    frontmatter {
      title
      tags
      mainLink
      sourceLink
    }
  }
}
`
