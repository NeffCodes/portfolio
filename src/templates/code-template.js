import React from "react";
import { graphql } from 'gatsby';
import { ExternalButton, ExternalSecondaryButton } from '../components/button/Buttons';

import Layout from '../components/layout/layout';
import { project, md} from './template.module.css';

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
        <div dangerouslySetInnerHTML={{ __html: post.html }} className={ md }/>
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
