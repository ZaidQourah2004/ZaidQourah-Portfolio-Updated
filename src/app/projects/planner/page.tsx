import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Digital Planner and Reminders";
  const description = "A Python-based task management application that simplifies task management and boosts productivity.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/planner`,
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

export default function DigitalPlanner() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Digital Planner and Reminders",
            description: "A Python-based task management application that simplifies task management and boosts productivity.",
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
          📝 Digital Planner and Reminders
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Simplifying task management for enhanced productivity
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
          src="/images/projects/planner.webp"
          alt="Digital Planner and Reminders"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton owner="ZaidQourah2004" 
      repo="PROJECTS"
      path="Projects/Python/todo.py"
      newFolderName="Digital-Planner"
       />
      
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">Task Management</Tag>
        <Tag size="l">File I/O</Tag>
        <Tag size="l">Command Line Interface</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Introducing my Digital Planner and Reminders application, a Python-based project that simplifies task management and boosts productivity. This command-line tool provides an efficient way to manage tasks, set priorities, and track deadlines.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Task Management:</strong> Easily add, update, and delete tasks with a simple command-line interface.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Priority Levels:</strong> Assign priority levels to tasks to keep track of what's most important.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Due Dates:</strong> Set due dates for tasks to ensure timely completion.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Persistent Storage:</strong> Tasks are saved to a file, so they persist across sessions.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          This project showcases my skills in Python programming and file handling. Key technical aspects include:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Object-Oriented Design:</strong> Utilizes classes to model tasks and their attributes, demonstrating OOP principles.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>File Serialization:</strong> Implements data persistence through file I/O operations.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Command Parsing:</strong> Includes robust command parsing for user interaction.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Date Handling:</strong> Features comprehensive date manipulation for deadline management.
          </Text>
        </Column>
      </Column>
      
      {/* User Experience */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          User Experience
        </Heading>
        <Text variant="body-default-m">
          The application is designed to be user-friendly and efficient:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Intuitive Commands:</strong> Simple commands make it easy to manage tasks without a steep learning curve.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Clear Feedback:</strong> The application provides clear feedback for all operations.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Efficient Workflow:</strong> Designed to minimize keystrokes and maximize productivity.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This Digital Planner and Reminders application showcases my skills in Python programming and file handling. The application is designed to be user-friendly and efficient, making it a great tool for personal productivity.
        </Text>
        <Text variant="body-default-m">
          While simple in concept, this project demonstrates fundamental programming principles and practical application development skills that can be applied to more complex systems.
        </Text>
      </Column>
    </Column>
  );
} 