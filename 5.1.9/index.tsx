// @types/styled-components 5.1.9
import { ForwardedRef, forwardRef } from "react";
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

export default forwardRef(Button);
