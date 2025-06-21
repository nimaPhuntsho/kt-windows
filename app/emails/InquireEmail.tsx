import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
} from "@react-email/components";
interface Props {
  firstName: string;
  contents: string;
}

const InquireEmail = ({ firstName, contents }: Props) => {
  return (
    <>
      <Html>
        <Head />
        <Body
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <Container
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              maxWidth: "600px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              fontFamily:
                "Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif",
            }}
          >
            <Section
              style={{
                backgroundColor: "black",
                padding: "10px",
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  fontFamily:
                    "Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif",
                  letterSpacing: "2px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                K&T Windows
              </Text>
            </Section>

            <Section style={{}}>
              <Text>Hi {firstName},</Text>
              <Text>Thank you for the recent following inquiry:</Text>
              <Text style={{ textAlign: "justify" }}> {contents} </Text>
              <Text>One of our team will get back to you soon</Text>
            </Section>
            <Section>
              <Text>Kind regards,</Text>
              <Text
                style={{
                  padding: 0,
                  margin: 0,
                }}
              >
                Sales Department
              </Text>
              <Text
                style={{
                  padding: 0,
                  margin: 0,
                }}
              >
                M: 04341433343
              </Text>
              <Text
                style={{
                  padding: 0,
                  margin: 0,
                }}
              >
                E : nimau@gmail.com
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </>
  );
};

export default InquireEmail;
