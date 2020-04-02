import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  readonly title: string;
};

const BasePageWrapperSection = styled.section`
  max-height: calc(100vh - 232px);
  overflow: auto;
  padding-bottom: 500px;
`;

const BasePageWrapperHeading = styled.h2<{ readonly static: boolean }>`
  margin-top: 72px;
  margin-bottom: 20px;
  padding-left: 16px;
  font-size: 2rem;
`;

const BasePageWrapper: FunctionComponent<Props> = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <BasePageWrapperSection>
      <BasePageWrapperHeading static={false}>{title}</BasePageWrapperHeading>
      {children}
    </BasePageWrapperSection>
  );
};

export default BasePageWrapper;
