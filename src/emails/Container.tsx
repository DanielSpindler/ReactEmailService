import { Container, Text } from "@react-email/components";
import React, { ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
  readonly color: string;
};

export default ({ children, color }: Props) => (
  <Container className={color}>
    <Text className="px-[12px] leading-[1rem]">{children}</Text>
  </Container>
);
