import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Klondike Solitaire";
  const description = "A classic card game implemented in Python with advanced features and algorithms for a fully functional solitaire experience.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/solitaire`,
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

export default function SolitaireGame() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Klondike Solitaire",
            description: "A classic card game implemented in Python with advanced features and algorithms for a fully functional solitaire experience.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Game",
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
          🃏 Klondike Solitaire
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Classic card game with modern programming techniques
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
          src="/images/projects/solitaire.jpeg"
          alt="Klondike Solitaire"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton owner="ZaidQourah2004"
      repo="PROJECTS"
      path="Projects/Python/Klondike Solitare one-turn Project"
      newFolderName="Klondike-Solitaire"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">Game Development</Tag>
        <Tag size="l">Algorithms</Tag>
        <Tag size="l">Command Line Interface</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Welcome to my Klondike Solitaire project, a classic card game implemented in Python. This project demonstrates advanced features and algorithms for creating a fully functional solitaire game that's both engaging and challenging.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Card Management:</strong> Efficiently manages the deck, shuffling, and dealing of cards.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Game Logic:</strong> Implements the rules of Klondike Solitaire, including valid moves and game state checks.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>User Interaction:</strong> Provides a simple command-line interface for user interaction.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Game State Tracking:</strong> Keeps track of the game state, including score, moves, and time.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          This project showcases my proficiency in Python programming and game development, as well as my ability to implement complex algorithms and user interfaces:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Card and Deck Management:</strong> Created modules for handling the deck of cards, shuffling, and dealing using efficient data structures.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Game Logic Implementation:</strong> Developed functions to manage the game state and enforce the rules of solitaire with clean, modular code.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>User Interface Design:</strong> Designed a user-friendly command-line interface that clearly displays the game state and available moves.
          </Text>
        </Column>
      </Column>
      
      {/* Development Process */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Development Process
        </Heading>
        <Text variant="body-default-m">
          The development of this game involved several key stages:
        </Text>
        <Column as="ol" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Requirements Analysis:</strong> Defined the rules and mechanics of Klondike Solitaire.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Design:</strong> Created the data structures and algorithms needed to implement the game.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Implementation:</strong> Coded the game logic, card management, and user interface.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Testing:</strong> Rigorously tested the game to ensure all rules are properly enforced and edge cases are handled.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Refinement:</strong> Improved the user interface and game mechanics based on testing feedback.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          The Klondike Solitaire project is a testament to my skills in software development and my ability to create engaging and interactive applications. It showcases my proficiency in Python programming and game development, as well as my attention to detail in implementing complex rules and algorithms.
        </Text>
        <Text variant="body-default-m">
          This project serves as a fun and challenging game for solitaire enthusiasts, while demonstrating programming principles such as object-oriented design, algorithm implementation, and user interface development.
        </Text>
      </Column>
    </Column>
  );
} 