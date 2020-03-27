import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BasePrimaryButton } from '../styles';
import { PlayUriFunction } from '../context';

interface OwnProps {
  readonly name: string;
  readonly uri: string;
  readonly playUri: PlayUriFunction;
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

const ArtistPageHeader: FunctionComponent<Props> = ({ name, uri, playUri }: Props) => {
  return (
    <ArtistHeaderSection>
      <span>ARTIST</span>
      <ArtistName>{name}</ArtistName>
      <PlayButton onClick={() => playUri({ uri })}>play</PlayButton>
    </ArtistHeaderSection>
  );
};

export default ArtistPageHeader;
