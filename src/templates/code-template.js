import React from "react";
import { graphql } from 'gatsby';

import { ExternalSecondaryButton } from '../components/button/externalSecondaryButton';
import { ExternalButton } from '../components/button/externalButton';

import Layout from '../components/layout/layout';
import { project } from './template.module.css';

export default function TestPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <section className={ project }>
        <h1>{post.frontmatter.title}</h1>
        <div className='tags'>
          { post.frontmatter.tags.map( tag => {
              return(
                  <h3 key={`${post.id}-${tag}`}>{tag}</h3>
              )
          })}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          {post.frontmatter.mainLink && <ExternalButton destination={post.frontmatter.mainLink} content='See Live'/>}
          {post.frontmatter.sourceLink && <ExternalSecondaryButton destination={post.frontmatter.sourceLink} content='Source' icon='code'/>}
        </div>

      </section>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
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
