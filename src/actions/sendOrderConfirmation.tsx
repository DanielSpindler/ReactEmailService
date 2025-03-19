import { ConfirmOrder } from "../emails/orderConfirmation";
import { ConfigType, OrderBase } from "../types/types";
import { render } from "@react-email/render";
import mailer from "../mailer";
import React from "react";

type Props = {
  to: string;
  subject: string;
  orderContext: OrderBase & ConfigType;
};
// orderContext is the current Data needed for the ConfirmOrder Template inside of emails directory.

export default async ({
  to,
  subject,
  orderContext,
}: Props): Promise<void> => {
  const html = await render(<ConfirmOrder orderContext={orderContext} />);
  await mailer(to, subject, html);
};
