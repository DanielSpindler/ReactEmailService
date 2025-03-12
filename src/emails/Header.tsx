import { Section, Row, Column, Img, Link } from "@react-email/components";
import React from "react";

export default () => (
  <Section className="px-[32px] mt-[32px]">
    <Row>
      <Column align="center">
        <Link href={"/home"}>
          <Img
            alt="Header"
            src="https://cdn.example.com"
            className="mx-auto max-w-full"
          />
        </Link>
      </Column>
    </Row>
    <Row
      className="my-[32px] whitespace-nowrap font-bold"
      style={{
        fontSize: "20px",
      }}
    >
      <Column align="center">
        <table>
          <tr>
            <td className="px-[8px]">
              <Link
                className="text-black [text-decoration:none]"
                href={`/some/link`}
              >
                Nav1
              </Link>
            </td>
            <td className="px-[8px]">
              <Link
                className="text-black [text-decoration:none]"
                href={`/some/link`}
              >
                Nav2
              </Link>
            </td>
            <td className="px-[8px]">
              <Link
                className="text-black [text-decoration:none]"
                href={`/some/link`}
              >
                Nav3
              </Link>
            </td>
          </tr>
        </table>
      </Column>
    </Row>
  </Section>
);
