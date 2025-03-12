import { Img, Section, Text, Column, Link, Row } from "@react-email/components";
import { ConfigType } from "../types/types";
import React from "react";

type Props = {
  social: ConfigType["social"];
};

export default ({ social }: Props) => (
  <Section className="text-center w-full bg-black text-white p-6">
    <table className="w-full">
      <tr className="w-full">
        <td align="left">
          <Text className="mb-[8px] m-0 text-[15px] font-semibold leading-[24px]">
            Impressionen
          </Text>
        </td>
      </tr>
      <tr>
        <td align="left">
          <Row className="table-cell h-[44px] w-[56px] align-bottom">
            <Column className="pr-[8px]">
              <Link href={social?.facebook.uri}>
                <Img
                  alt="Facebook"
                  height="36"
                  src={social?.facebook.iconUri}
                  width="36"
                />
              </Link>
            </Column>
            <Column className="pr-[8px]">
              <Link href={social?.instagram.uri}>
                <Img
                  alt="Instagram"
                  height="36"
                  src={social?.instagram.iconUri}
                  width="36"
                />
              </Link>
            </Column>
            <Column className="pr-[8px]">
              <Link href={social?.twitter.uri}>
                <Img
                  alt="X"
                  height="36"
                  src={social?.twitter.iconUri}
                  width="36"
                />
              </Link>
            </Column>
            <Column className="pr-[8px]">
              <Link href={social?.youtube.uri}>
                <Img
                  alt="Youtube"
                  height="36"
                  src={social?.youtube.iconUri}
                  width="36"
                />
              </Link>
            </Column>
          </Row>
        </td>
      </tr>
      <tr>
        <td align="left">
          <Text className="mt-[8px] text-[14px] m-0 font-semibold leading-[24px]">
            Impressum
          </Text>
          <Text className="text-[13px] mt-[2px] m-0 leading-[12px]">
            Buisness GmbH <br />
            Street Str. 1, 0000 City <br />
            Geschäftsführer: Example <br />
            E-Mail: example@example.com <br />
            Handelsregister: Amtsgericht example, HRB Nummer: 000 <br />
            UmsatzSteuerID: 000000000
          </Text>
        </td>
      </tr>
      <tr>
        <td align="left">
          <Text className="text-[13px] m-auto mt-4 leading-[12px]">
            Weitere Informationen findest du
            <Link href={`/info`} className="underline text-white ml-1">
              Hier
            </Link>
          </Text>
          <Text className="text-[13px] m-auto mt-8 leading-[12px]">
            Hierbei handelt es sich um eine automatisierte E-Mail. Deine
            Nachricht erreicht uns über diesen Weg nicht.
          </Text>
          <Text className="text-[13px] m-auto mt-4 leading-[12px]">
            Bei Fragen kannst du uns gerne über das
            <Link href={`/contact`} className="underline text-white mx-1">
              Kontaktformular
            </Link>
            erreichen.
          </Text>
        </td>
      </tr>
      <tr>
        <td align="left" className="flex">
          <Link href={`/privacy`} className="text-gray-600">
            Datenschutz
          </Link>
          <Link href={`/conditions`} className="text-gray-600 ml-4">
            AGB
          </Link>
        </td>
      </tr>
    </table>
  </Section>
);
