import { ForwardedRef, forwardRef } from "react";
import { ElementType } from 'react';
import styled from "styled-components";

const Style = styled.button`
  display: block;
  padding: 16px;
`;

const Button = (
  { as }: { as: ElementType },
  ref: ForwardedRef<HTMLElement | null>
) => {
  return <Style as={as} ref={ref} />;
};

export default forwardRef(Button);
