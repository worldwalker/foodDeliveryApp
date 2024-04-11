import React from 'react';
import styled from 'styled-components/native';

export interface IMarginerProps {
  width?: string;
  height?: string;
  direction?: 'horizontal' | 'vertical';
  bg?: string;
  padding?: string;
  borderBottom?: string;
}

const HorizontalMargin = styled.View<IMarginerProps>`
  width: ${({width}: {width: string}) => `${width}px`};
  height: ${({height}: {height: string}) => `${height}px`};
  background: ${({bg}: {bg: string}) => `${bg}`};
  padding: ${({padding = '0'}: {padding: string}) => `${padding}px`};
  border-bottom: ${({borderBottom}: {borderBottom: string}) =>
    `${borderBottom}`};
`;

const VerticalMargin = styled.View<IMarginerProps>`
  width: ${({width}: {width: string}) => `${width}px`};
  height: ${({height}: {height: string}) => `${height}px`};
  background: ${({bg}: {bg: string}) => `${bg}`};
  padding: ${({padding = '0'}: {padding: string}) => `${padding}px`};
  border-bottom: ${({borderBottom}: {borderBottom: string}) =>
    `${borderBottom}`};
`;

function Divider(props: IMarginerProps) {
  const {direction} = props;
  if (direction === 'horizontal') return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Divider.defaultProps = {
  direction: 'horizontal',
};

export default Divider;
