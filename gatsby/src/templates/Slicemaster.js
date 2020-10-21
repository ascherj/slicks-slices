import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SlicemasterStyles = styled.div`
  text-align: center;

  .slicemaster-info {
    margin: 1rem auto;
  }
`;

export default function SlicemasterPage({ data }) {
  const { person } = data;
  return (
    <>
      <SEO title={person.name} image={person.image.asset.src} />
      <SlicemasterStyles>
        <Img fluid={person.image.asset.fluid} alt={person.name} />
        <div className="slicemaster-info">
          <h2 className="mark">{person.name}</h2>
          <p>{person.description}</p>
        </div>
      </SlicemasterStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
