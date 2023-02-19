/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';

type FlexProps = React.HTMLAttributes<HTMLElement> & {
  grow?: boolean;
  shrink?: boolean;
  direction?: React.CSSProperties['flexDirection'];
  wrap?: React.CSSProperties['flexWrap'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  innerRef?: React.Ref<any>;
  children?: React.ReactNode;
};

const SyledFlex = styled.div<FlexProps>`
    flexGrow: ${(p) => (p.grow ? 1 : 0)},
    flexShrink: ${(p) => (p.shrink || p.shrink === undefined ? 1 : 0)},
    flexDirection: ${(p) => p.direction ?? 'row'},
    flexWrap: ${(p) => p.wrap ?? 'nowrap'},
    ${(p) => p.justifyContent},
    ${(p) => p.alignItems},

`;

export default function Flex({ children, innerRef }: FlexProps) {
  return <SyledFlex ref={innerRef}>{children}</SyledFlex>;
}
