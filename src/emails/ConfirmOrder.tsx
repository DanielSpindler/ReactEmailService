import {
  Tailwind,
  Heading,
  Text,
  Column,
  Row,
  Section,
  Html,
  Head,
  Font,
  Body,
  Markdown,
} from "@react-email/components";
import * as React from "react";
import { ConfigType, OrderBase } from "../types/types";
import Container from "./Container";
import Divider from "./Divider";
import Header from "./Header";
import Footer from "./Footer";
import Order from "./Order";

type Props = {
  orderContext: OrderBase & ConfigType;
};

export default ({ orderContext }: Props) => (
  <Html lang={orderContext?.billingAddress.country || "en"} dir="ltr">
    <Head>
      <Font
        fontFamily="Arial"
        fallbackFontFamily="Times New Roman"
        fontWeight="400"
      />
    </Head>
    <Tailwind>
      <Body className="max-w-[600px] mx-auto min-w-[300px] p-6">
        <Header />
        <Divider />
        <Heading as="h1" className="mx-auto text-center ">
          {orderContext?.title}
        </Heading>
        <Text
          className="leading-none"
          dangerouslySetInnerHTML={{ __html: orderContext?.greeting }}
        />
        {!orderContext?.paymentInstruction ? ( // just 4 testing or use this if Markdwn is not needed. EXAMPLEDATA
          <Container color={"bg-red-500 text-white"}>
            Du hast als Zahlungsart Vorkasse gewählt. Bitte überweise den Betrag
            in Höhe von 4.356,64 € auf folgendes Konto: Kontoinhaber: Example
            GmbH
            <br />
            Kreditinstitut: Example
            <br />
            IBAN: DE0000000000000000000000
            <br />
            BIC: BYLADEM
            <br />
            Verwendungszweck: 000000
          </Container>
        ) : (
          <Markdown
            markdownContainerStyles={{
              backgroundColor: "rgb(239,68,68)",
              padding: "10px 20px",
              color: "white",
            }}
          >
            {orderContext?.paymentInstruction}
          </Markdown>
        )}
        <Section>
          <br />
          <Row>
            <Column>
              <Text className="m-0 font-semibold">
                {orderContext?.orderDate}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.createdAt || "22.02.2025"}
              </Text>
              <Text className="m-0 font-semibold">
                {orderContext?.orderNumber}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.orderNumber || "A67BCjKLmN!234OpLSAB"}
              </Text>
            </Column>
          </Row>
          <br />
          <Row>
            <Column align="left" className="h-[40px] whitespace-nowrap">
              <Text className="font-semibold m-0">Lieferadresse</Text>
              <Text className="leading-none m-0 ">
                {orderContext?.shippingAddress.firstName || "John"}{" "}
                {orderContext?.shippingAddress.lastName || "Example"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.shippingAddress.company || "Example GmbH"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.shippingAddress.addressLine1 || "Street 48A"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.shippingAddress.addressLine2 || "testAddress2"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.shippingAddress.addressLine3 || "testAddress3"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.shippingAddress.postalCode || "Code"}{" "}
                {orderContext?.shippingAddress.city || "City"}
              </Text>
            </Column>
            <Column className="w-full" />
            <Column align="left" className="h-[40px] whitespace-nowrap">
              <Text className="font-semibold m-0">Rechnungsadresse</Text>
              <Text className="leading-none m-0">
                {orderContext?.billingAddress.firstName || "Daniel"}{" "}
                {orderContext?.billingAddress.lastName || "Surname"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.billingAddress.company || "Example GmbH"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.billingAddress.addressLine1 ||
                  "Neustifterstraße 48A"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.billingAddress.addressLine2 || "testAddress2"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.billingAddress.addressLine3 || "testAddress3"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.billingAddress.postalCode || "Code"}{" "}
                {orderContext?.billingAddress.city || "City"}
              </Text>
            </Column>
          </Row>
        </Section>
        <Order
          products={
            orderContext?.lineItems || [
              //dev example can be deleted, for local debugging in reactEmail Gui EXAMPLEDATA
              {
                lpid: "LP123456",
                mpn: "MPN7890",
                name: "Wireless Headphones",
                totalPrice: "99.99",
                quantity: 1,
                slug: "wireless-headphones",
                media: {
                  images: [
                    {
                      label: "Front View",
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png",
                    },
                  ],
                },
              },
            ]
          }
        />
        <Section>
          <Row>
            <Column align="left" className="h-[40px]">
              <Text className="leading-none m-0 ">
                {orderContext?.paymentMethod}
              </Text>
              <Text className="leading-none m-0 ">
                {orderContext?.subtotalPrice}
              </Text>
              <Text className="leading-none m-0">{orderContext?.shipping}</Text>
              <Text className="m-0 mt-2 font-semibold">
                {orderContext?.totalPrice}
              </Text>
            </Column>
            <Column className="w-full" />
            <Column align="left" className="h-[40px]">
              <Text className="leading-none m-0">
                {orderContext?.paymentMethod || "Vorkasse"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.subtotalPrice || "4200"}
              </Text>
              <Text className="leading-none m-0">
                {orderContext?.shippingPrice || "100"}
              </Text>
              <Text className="m-0 mt-2 font-semibold">
                {orderContext?.totalPrice || "4300"}
              </Text>
            </Column>
          </Row>
          <Text dangerouslySetInnerHTML={{ __html: orderContext?.closing }} />
        </Section>
        <Footer social={orderContext?.social} />
      </Body>
    </Tailwind>
  </Html>
);
