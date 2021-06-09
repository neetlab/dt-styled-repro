import { ElementType, ForwardedRef, forwardRef } from "react";
import styled from "styled-components";

const Style = styled.button`
  display: block;
  padding: 16px;
`;

const Button1 = (
  { as }: { as: 'p' | 'span' },
  ref: ForwardedRef<HTMLElement | null>
) => {
  return <Style as={as} ref={ref} />;
};

const Button2 = (
  { as }: { as: ElementType},
  ref: ForwardedRef<HTMLElement | null>
) => {
  return <Style as={as} ref={ref} />;
};

// export default forwardRef(Button);
