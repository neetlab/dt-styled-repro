// @types/styled-components 5.1.9
import { ElementType, ForwardedRef, forwardRef } from "react";
import styled from "styled-components";

const Style = styled.button`
  display: block;
  padding: 16px;
`;

const Button = (
  props: { as: 'p' | 'span' },
  ref: ForwardedRef<HTMLElement | null>
) => {
  return <Style as={props.as} ref={ref} />;
};

const ButtonFixed = (
  props: { as: 'p' | 'span' },
  ref: ForwardedRef<HTMLElement | null>
) => {
  return <Style as={props.as as ElementType} ref={ref} />;
};

export default forwardRef(Button);
