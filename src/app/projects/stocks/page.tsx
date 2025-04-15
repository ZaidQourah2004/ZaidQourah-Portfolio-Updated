import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Stock Market Simulator";
  const description = "A sophisticated C++ simulation tool designed for traders to practice strategies in a risk-free environment.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/stocks`,
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

export default function StockMarketSimulator() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Stock Market Simulator",
            description: "A sophisticated C++ simulation tool designed for traders to practice strategies in a risk-free environment.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Financial",
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
          📈 Stock Market Simulator
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Advanced trading simulation in a risk-free environment
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
          src="/images/projects/stock-market.png"
          alt="Stock Market Simulator"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton owner="ZaidQourah2004"
      repo="PROJECTS"
      path="/C++/project3"
      newFolderName="Stock-Market-Simulator"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">C++</Tag>
        <Tag size="l">Algorithms</Tag>
        <Tag size="l">OOP</Tag>
        <Tag size="l">Data Structures</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Welcome to my Stock Market Simulator project, a sophisticated simulation tool designed for both aspiring and experienced traders. This application is built in C++ and demonstrates advanced features and algorithms for simulating a real trading environment.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Real-Time Order Matching:</strong> Efficiently matches buy and sell orders using advanced sorting and matching algorithms.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Comprehensive User Account Management:</strong> Enables users to manage their virtual funds, with functionalities to deposit and track account balances.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Advanced Order Handling:</strong> Supports adding and managing multiple orders, ensuring accurate order processing and execution.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          The Stock Market Simulator showcases my proficiency in C++ and object-oriented programming, as well as my ability to implement complex algorithms for real-time applications. The project includes:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Order and Exchange Management:</strong> Modules for handling and matching orders, simulating a real trading environment with priority queues and efficient matching algorithms.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>User Accounts:</strong> Management of user balances and transactions, simulating financial account operations with secure transaction tracking.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Reporting System:</strong> Generates detailed reports of trading activities, portfolio performance, and transaction history.
          </Text>
        </Column>
      </Column>
      
      {/* Implementation Challenges */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Implementation Challenges
        </Heading>
        <Text variant="body-default-m">
          Developing this simulator presented several interesting challenges:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Order Matching Optimization:</strong> Creating an efficient algorithm to match buy and sell orders in real-time while maintaining fairness and price-time priority.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Concurrency Control:</strong> Managing multiple simultaneous order submissions and executions without race conditions or deadlocks.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Market Data Simulation:</strong> Generating realistic market data that reflects actual market behaviors and volatility.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This project is a testament to my skills in software development and my ability to create efficient, reliable, and user-friendly applications. It serves as a powerful tool for practicing trading strategies and understanding market dynamics in a risk-free setting.
        </Text>
        <Text variant="body-default-m">
          The Stock Market Simulator demonstrates not only technical proficiency in C++ and algorithms but also an understanding of financial market mechanics and trading systems, making it a comprehensive educational tool for traders at all experience levels.
        </Text>
      </Column>
    </Column>
  );
} 