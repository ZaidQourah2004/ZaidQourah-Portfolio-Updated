import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Network Analysis Software";
  const description = "A Python-based tool designed to analyze and visualize complex network data.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/network`,
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

export default function NetworkAnalysis() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Network Analysis Software",
            description: "A Python-based tool designed to analyze and visualize complex network data.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Data Analysis",
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
          🔄 Network Analysis Software
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Analyzing and visualizing complex network relationships
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
          src="/images/projects/network.jpg"
          alt="Network Analysis Software"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton 
        owner="ZaidQourah2004" 
        repo="PROJECTS"
        path="Projects/Python/Network Analysis Project"
        newFolderName="Network-Analysis"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">NetworkX</Tag>
        <Tag size="l">Data Visualization</Tag>
        <Tag size="l">Matplotlib</Tag>
        <Tag size="l">Pandas</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Welcome to my Network Analysis Software project, a Python-based tool designed to analyze and visualize network data. This application helps researchers and analysts uncover patterns and relationships within complex networks, from social connections to computer systems.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Processing:</strong> Efficiently processes and analyzes large network datasets using optimized algorithms and data structures.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Visualization:</strong> Provides rich visual representations of network data to help understand complex relationships through interactive graphs.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Customizable Analysis:</strong> Allows customization of network analysis parameters to suit different use cases and research questions.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          This project showcases my proficiency in Python programming, data processing, and visualization:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Import:</strong> Supports importing data from various formats including CSV, JSON, and GraphML, with robust error handling and validation.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Analysis Modules:</strong> Contains modules for various network analysis algorithms, including centrality measures, community detection, and path analysis.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Interactive Visualizations:</strong> Provides interactive visualizations to explore network data using dynamic force-directed layouts and customizable visual elements.
          </Text>
        </Column>
      </Column>
      
      {/* Network Metrics */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Network Metrics
        </Heading>
        <Text variant="body-default-m">
          The software calculates and visualizes several important network metrics:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Centrality Measures:</strong> Identifies the most important nodes using degree, betweenness, closeness, and eigenvector centrality.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Community Structure:</strong> Detects groups and clusters within the network using modularity-based algorithms.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Structural Properties:</strong> Analyzes network diameter, density, clustering coefficient, and other topological features.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Path Analysis:</strong> Identifies shortest paths and bottlenecks within the network structure.
          </Text>
        </Column>
      </Column>
      
      {/* Use Cases */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Use Cases
        </Heading>
        <Text variant="body-default-m">
          This network analysis tool can be applied to various domains:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Social Network Analysis:</strong> Study relationships and influence patterns within social groups.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Transportation Networks:</strong> Optimize routes and identify critical infrastructure.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Biological Networks:</strong> Analyze protein interactions or neural connections.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Computer Networks:</strong> Map data flow and identify vulnerable points in network infrastructure.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This project is a testament to my skills in software development and data analysis. It serves as a powerful tool for researchers and analysts working with network data, enabling them to extract meaningful insights from complex interconnected systems.
        </Text>
        <Text variant="body-default-m">
          The Network Analysis Software demonstrates not only my technical abilities in Python programming and data visualization but also my understanding of graph theory concepts and network analysis principles, making it a versatile solution for various analytical needs.
        </Text>
      </Column>
    </Column>
  );
} 