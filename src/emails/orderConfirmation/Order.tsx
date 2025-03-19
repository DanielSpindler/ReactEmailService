import { Section, Text, Img } from "@react-email/components";
import { LineItem } from "../../types/types";
import React from "react";

type Props = {
  readonly products: LineItem[];
};

export const Order = ({ products }: Props) => (
  <Section className="my-[16px] text-center border border-solid border-gray-200 p-[16px]">
    <table className="mb-[16px]" width="100%">
      <tbody>
        <tr>
          <th className="border-0 border-b border-solid border-gray-200 py-[8px]">
            &nbsp;
          </th>
          <th
            align="left"
            className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
            colSpan={6}
          >
            <Text className="font-semibold">Artikel</Text>
          </th>
          <th
            align="center"
            className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
          >
            <Text className="font-semibold">Menge</Text>
          </th>
          <th
            align="center"
            className="border-0 border-b border-solid border-gray-200 py-[8px] text-gray-500"
          >
            <Text className="font-semibold">Preis</Text>
          </th>
        </tr>
        {products?.map(({ name, mpn, lpid, totalPrice, quantity, media }) => (
          <tr key="lpid">
            <td className="border-0 border-b border-solid border-gray-200 py-[8px]">
              <Img
                alt={media.images[0].label || ""}
                className="object-cover"
                height={110}
                src={
                  `${media.images[0].uri}` ||
                  "https://react.email/static/braun-analogue-clock.jpg"
                }
              />
            </td>
            <td
              align="left"
              className="border-0 border-b border-solid border-gray-200 py-[8px] pl-2"
              colSpan={6}
            >
              <Text>
                {name || "Some Test Produkt Name"} <br />
                {mpn || "27900Mn(29012"} <br />
                {lpid || "1293812831838"}
              </Text>
            </td>
            <td
              align="center"
              className="border-0 border-b border-solid border-gray-200 py-[8px]"
            >
              <Text>{quantity || "99"}</Text>
            </td>
            <td
              align="center"
              className="border-0 border-b border-solid border-gray-200 py-[8px]"
            >
              <Text>{totalPrice || "1942,00€"}</Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Section>
);

export default Order;
