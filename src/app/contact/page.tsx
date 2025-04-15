import {
  Column,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, contact, social } from "@/app/resources/content";
import ContactForm from "./ContactForm";
import styles from "./contact.module.scss";

export async function generateMetadata() {
  const title = contact.title;
  const description = contact.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/contact`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Contact() {
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: contact.title,
            description: contact.description,
            url: `https://${baseURL}/contact`,
          }),
        }}
      />
      
      <Flex fillWidth mobileDirection="column" horizontal="center" paddingTop="xl">
        <Column className={styles.blockAlign} fillWidth>
          <Heading variant="display-strong-xl" marginBottom="s">
            {contact.title}
          </Heading>
          
          <Text variant="display-default-s" onBackground="neutral-weak" marginBottom="xl">
            {contact.description}
          </Text>

          {/* Contact Form */}
          <ContactForm />
        </Column>
      </Flex>
    </Column>
  );
} 