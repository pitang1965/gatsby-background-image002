import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const BlackOverlay = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  align-items: center;
  color: white;
`;

const ContentBox = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const IndexPage = props => {
  const image = getImage(props.data.indexImage);
  const bgImage = convertToBgImage(image);

  return (
    <Layout>
      <SEO title="Home" />
      <StyledBackground {...bgImage}>
        <BlackOverlay>
          <ContentBox>
            <h1>London</h1>
            <h2>27 Apr, 2004</h2>
          </ContentBox>
        </BlackOverlay>
      </StyledBackground>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "london.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 2560
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
