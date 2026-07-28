import React from "react"
import { Html, Body, Container, Heading, Font, Head, Section, Text, Link } from "@react-email/components"

function Email({ code }: { code: string }) {
    return (
    <Html lang='en'>
        <Head>
            <Font 
                fontFamily='DM Mono'
                fallbackFontFamily='monospace'
                webFont={{
                    url: "https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2",
                    format: "woff2",
                }}
            />
        </Head>
        <Body>
            <Container style={{ backgroundColor: "#F3F0E8" }}> 
                <Section style={{ backgroundColor: "#8B1E1E", paddingLeft: 20}}>
                    <Link href="https://rinkuio.vercel.app" target="_blank">  
                        <Heading style={{ color: "#FFFFFF", letterSpacing: 2 }} >
                            Rinku
                        </Heading>
                    </Link>
                </Section>
                <Section style={{ padding: 20, color: "#7A7062" }}>
                    <Text>Thank you for creating your Rinku account.</Text>
                    <Text>To complete your registration, please enter the verification code below</Text>
                    <Container style={{ textAlign: "center", background: "#EDE9DF", padding: 20 }}>
                        <Text style={{ fontSize: 40 }}>{ code }</Text>
                    </Container>
                    <Text>The code expires in 10 minutes.</Text>
                    <Text>If you didn't sign up for a Rinku account, you can safely ignore this email.</Text>
                </Section>

            </Container>
        </Body>
    </Html>
)}

export default Email