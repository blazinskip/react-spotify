import React, { FunctionComponent, PropsWithChildren, SyntheticEvent, useState } from 'react';
import styled from 'styled-components';

type Props = {
  readonly title: string;
};

const BasePageWrapperSection = styled.section`
  max-height: calc(100vh - 232px);
  overflow: auto;
  padding-bottom: 500px;
`;

const BasePageWrapperHeading = styled.h2<{ readonly isStatic: boolean }>`
  transition: all 0.3s ease-in-out;

  position: ${({ isStatic }) => (isStatic ? 'sticky' : 'initial')};
  top: ${({ isStatic }) => (isStatic ? '0' : '0')};
  margin-top: ${({ isStatic }) => (isStatic ? 0 : '72px')};
  margin-bottom: 0;
  padding-bottom: 20px;
  padding-left: 16px;

  background: ${({ theme }) => theme.colors.white};

  font-size: ${({ isStatic }) => (isStatic ? '1rem' : '2rem')};
`;

const BasePageWrapper: FunctionComponent<Props> = ({ title, children }: PropsWithChildren<Props>) => {
  // TODO it could be extracted to hook
  const [isHeaderStatic, setIsHeaderStatic] = useState(false);

  const handleScroll = (event: SyntheticEvent) => {
    event.persist();
    const {
      currentTarget: { scrollTop },
    } = event;

    if (scrollTop > 100) {
      setIsHeaderStatic(() => true);
    } else {
      setIsHeaderStatic(() => false);
    }
  };

  return (
    <BasePageWrapperSection onScroll={event => handleScroll(event)}>
      <BasePageWrapperHeading isStatic={isHeaderStatic}>{title}</BasePageWrapperHeading>
      {children}
    </BasePageWrapperSection>
  );
};

export default BasePageWrapper;
