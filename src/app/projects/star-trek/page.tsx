import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Star Trek Navigation Project";
  const description = "A Python-based application designed to find the most efficient paths through star systems, inspired by the voyages of the USS Enterprise.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/star-trek`,
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

export default function StarTrekNavigation() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Star Trek Navigation Project",
            description: "A Python-based application designed to find the most efficient paths through star systems, inspired by the voyages of the USS Enterprise.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Navigation",
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
          🚀 Star Trek Navigation Project
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Finding optimal paths through the final frontier
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
          src="/images/projects/star-trek.png"
          alt="Star Trek Navigation Project"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton 
        owner="ZaidQourah2004" 
        repo="PROJECTS"
        path="Projects/Python/Data Structures and Alogrithms Work/project07-fs23"
        newFolderName="Star-Trek-Navigation"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">Graph Theory</Tag>
        <Tag size="l">A* Algorithm</Tag>
        <Tag size="l">Path Finding</Tag>
        <Tag size="l">Data Structures</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Welcome to my Star Trek Navigation Project, a Python-based application designed to find the most efficient paths through star systems, inspired by the voyages of the USS Enterprise. This project combines the fascinating world of Star Trek with advanced algorithms to create an innovative navigation system.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Star System Mapping:</strong> Navigate through interconnected star systems to find the shortest path between any two points in the Star Trek universe.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Teleportation Points:</strong> Use teleportation for instant travel between distant star systems, simulating warp technology from the Star Trek universe.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Optimal Route Planning:</strong> Employ the A* algorithm to efficiently plan travel routes, saving time and energy for interstellar voyages.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          This project demonstrates my ability to solve complex navigation problems using advanced algorithms:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Graph Representation:</strong> Models star systems as graphs to manage navigation and teleportation using adjacency lists and weighted edges.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Pathfinding Algorithms:</strong> Implements multiple algorithms (Dijkstra's, A*, and BFS) to find the shortest and most efficient paths between star systems.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Distance Calculations:</strong> Uses advanced techniques to compute distances and optimize travel routes, including heuristic functions for A* implementation.
          </Text>
        </Column>
      </Column>
      
      {/* Challenges and Solutions */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Challenges and Solutions
        </Heading>
        <Text variant="body-default-m">
          This project tackled several complex algorithmic challenges:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Optimizing the A* Heuristic:</strong> Developed a custom heuristic function that accurately estimates distances in 3D space while accounting for teleportation shortcuts.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Handling Teleportation Points:</strong> Implemented special graph edges to represent teleportation, requiring careful consideration of how these affect traditional pathfinding algorithms.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Visualizing 3D Paths:</strong> Created a visualization system that can represent complex 3D paths in a comprehensible way for users.
          </Text>
        </Column>
      </Column>
      
      {/* Real-world Applications */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Real-world Applications
        </Heading>
        <Text variant="body-default-m">
          While inspired by Star Trek, the algorithms and techniques used have practical applications:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Transportation Networks:</strong> The same pathfinding algorithms can optimize routes in real-world transportation systems.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Network Routing:</strong> Similar techniques are used in computer networks to route data efficiently.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Video Game Development:</strong> These algorithms are essential for NPC pathfinding in games.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This project highlights my skills in Python programming, graph theory, and algorithm design. By combining these technical skills with a creative Star Trek theme, I've created a system that's both educational and entertaining.
        </Text>
        <Text variant="body-default-m">
          The Star Trek Navigation Project serves as a powerful tool for exploring and navigating complex star systems while demonstrating advanced computer science concepts in an engaging way.
        </Text>
      </Column>
    </Column>
  );
} 