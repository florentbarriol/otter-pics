import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  margin: auto;

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RandomImage = ({ id, largeImageURL, imageHeight, imageWidth }) => (
  <Block>
    <Image
      key={id}
      src={largeImageURL}
      width={imageWidth}
      height={imageHeight}
      alt="Otter pic"
    />
  </Block>
);
