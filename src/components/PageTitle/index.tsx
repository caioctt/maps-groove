import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const PageTitleWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap-reverse',
  alignItems: 'center',
  marginTop: '10px',
});

const TitlesWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const ActionWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export type PageTitleProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageTitle({ title, subtitle, children }: PageTitleProps) {
  return (
    <PageTitleWrapper>
      <TitlesWrapper>
        <Typography variant="h4" fontWeight={700} color="primary.dark">
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="subtitle2" color="textSecondary">
            {subtitle}
          </Typography>
        )}
      </TitlesWrapper>
      <ActionWrapper>{children}</ActionWrapper>
    </PageTitleWrapper>
  );
}
