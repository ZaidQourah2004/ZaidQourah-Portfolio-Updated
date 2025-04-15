import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Journaling App";
  const description = "A Python-based application designed to help you keep track of your daily thoughts and experiences.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/journal`,
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

export default function JournalingApp() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Journaling App",
            description: "A Python-based application designed to help you keep track of your daily thoughts and experiences.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Productivity",
            operatingSystem: "Cross-platform",
          }),
        }}
      />
      
      {/* Project Header */}
      <Flex direction="column" gap="m">
        <Button 
          href="/projects" 
          variant="tertiary"
          size="s"
          prefixIcon="chevronLeft"
          style={{ alignSelf: 'flex-start' }}
        >
          Back to Projects
        </Button>
        <Heading variant="display-strong-xl" style={{ marginTop: 'var(--static-space-16)' }}>
          📓 Journaling App
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Record, organize, and reflect on your daily experiences
        </Text>
      </Flex>
      
      {/* Project Image */}
      <Flex 
        border="neutral-medium" 
        radius="l"
        overflow="hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <SmartImage
          src="/images/projects/journal.jpg"
          alt="Journaling App"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton 
        owner="ZaidQourah2004" 
        repo="PROJECTS"
        path="Projects/Python/journal.py"
        newFolderName="Journaling-App"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">File I/O</Tag>
        <Tag size="l">Text Processing</Tag>
        <Tag size="l">Command Line Interface</Tag>
        <Tag size="l">Data Storage</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Welcome to my Journaling App project, a Python-based application designed to help you keep track of your daily thoughts and experiences. This command-line tool provides a simple yet powerful way to maintain a digital journal, making personal reflection and record-keeping effortless.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Easy Entry Management:</strong> Easily add, update, and delete journal entries through a simple command-line interface.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Date Tracking:</strong> Automatically associates entries with the date they were created or modified, making chronological organization effortless.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Search Functionality:</strong> Quickly find past entries by searching for keywords, allowing you to revisit specific memories or thoughts.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Persistent Storage:</strong> Entries are saved to a file, ensuring they are retained across sessions and protected from loss.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          This project showcases my skills in Python programming and file handling:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>File Management:</strong> Implements robust reading and writing to persistent storage with error handling and data validation.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Data Serialization:</strong> Uses JSON for efficient data storage and retrieval, ensuring entries maintain their structure and metadata.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Text Processing:</strong> Includes advanced text searching and filtering capabilities using regular expressions and string manipulation.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>User Interface:</strong> Features a clean, intuitive command-line interface with helpful prompts and error messages.
          </Text>
        </Column>
      </Column>
      
      {/* User Experience */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          User Experience
        </Heading>
        <Text variant="body-default-m">
          The application focuses on creating a seamless journaling experience:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Minimal Friction:</strong> Quick and simple commands reduce barriers to daily journaling, making it easy to maintain the habit.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Organizational Tools:</strong> Automatic date tagging and search capabilities help users manage and review their entries efficiently.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Privacy Focused:</strong> Local storage keeps personal entries private and under user control, without reliance on external services.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Backup Options:</strong> Provides functionality to export and backup journal entries to prevent data loss.
          </Text>
        </Column>
      </Column>
      
      {/* Benefits of Journaling */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Benefits of Journaling
        </Heading>
        <Text variant="body-default-m">
          This app was designed with the following benefits of regular journaling in mind:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Mental Health:</strong> Regular journaling can reduce stress and anxiety by providing an outlet for thoughts and emotions.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Self-Reflection:</strong> Reviewing past entries enables valuable insights into personal patterns and growth over time.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Memory Preservation:</strong> Keeping a journal creates a permanent record of life experiences that might otherwise be forgotten.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Goal Tracking:</strong> Documenting progress toward personal goals increases accountability and motivation.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This Journaling App project showcases my skills in Python programming and file handling. The application is designed to be user-friendly and efficient, making it a valuable tool for personal reflection and record-keeping.
        </Text>
        <Text variant="body-default-m">
          While simple in concept, this project demonstrates fundamental programming principles and practical application development skills, showing how technology can be used to enhance daily habits and personal well-being.
        </Text>
      </Column>
    </Column>
  );
} 