import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BasePrimaryButton } from '../styles';

interface OwnProps {
  name: string;
}

type Props = OwnProps;

const ArtistHeaderSection = styled.section``;

const ArtistName = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
`;

const PlayButton = styled(BasePrimaryButton)`
  min-width: 110px;
  padding: 12px 0;
`;

const ArtistPageHeader: FunctionComponent<Props> = ({ name }: Props) => {
  return (
    <ArtistHeaderSection>
      <span>ARTIST</span>
      <ArtistName>{name}</ArtistName>
      <PlayButton>play</PlayButton>
    </ArtistHeaderSection>
  );
};

export default ArtistPageHeader;
