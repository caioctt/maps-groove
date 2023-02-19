import React from 'react';
import { Container } from '@mui/material';
import PageTitle, { PageTitleProps } from '../PageTitle';

type PageTitleSectionProps = PageTitleProps & {
  noMargin?: boolean;
};

export default function PageTitleSection({ title, children, ...rest }: PageTitleSectionProps) {
  return (
    <Container>
      <PageTitle title={title} {...rest}>
        {children}
      </PageTitle>
    </Container>
  );
}
