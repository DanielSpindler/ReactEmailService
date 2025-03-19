import { Container as ContainerReactEmail, Text } from "@react-email/components";
import React, { ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
  readonly color: string;
};

export const Container = ({ children, color }: Props) => (
  <ContainerReactEmail className={color}>
    <Text className="px-[12px] leading-[1rem]">{children}</Text>
  </ContainerReactEmail>
);

export default Container
