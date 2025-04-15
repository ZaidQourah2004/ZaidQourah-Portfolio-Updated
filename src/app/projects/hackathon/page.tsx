import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Hackathon Application Analyzer";
  const description = "A project implementing AVL Trees within a k-Nearest Neighbors algorithm for efficient data classification at SpartaHack 9.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/hackathon`,
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

export default function HackathonAnalyzer() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Hackathon Application Analyzer",
            description: "A project implementing AVL Trees within a k-Nearest Neighbors algorithm for efficient data classification at SpartaHack 9.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Data Analysis",
            operatingSystem: "Cross-platform",
            event: {
              "@type": "Event",
              name: "SpartaHack 9",
              description: "Hackathon event at Michigan State University",
            }
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
          🏆 Hackathon Application Analyzer
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Enhancing data classification with AVL Trees and k-Nearest Neighbors
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
          src="/images/projects/mlh.jpeg"
          alt="Hackathon Application Analyzer"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton 
        owner="ZaidQourah2004" 
        repo="PROJECTS"
        path="Projects/Python/Data Structures and Alogrithms Work/project06-fs23"
        newFolderName="Hackathon-Application-Analyzer"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Data Structures</Tag>
        <Tag size="l">AVL Trees</Tag>
        <Tag size="l">k-Nearest Neighbors</Tag>
        <Tag size="l">Machine Learning</Tag>
        <Tag size="l">Algorithm Optimization</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          In this project, I implemented AVL Trees within a k-Nearest Neighbors algorithm. This innovative approach enhances classification accuracy and processing efficiency, representing a creative solution to common data analysis challenges.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Self-Balancing Trees:</strong> Ensures efficient data management and quick access times, maintaining optimal tree height regardless of insertion order.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Classification Accuracy:</strong> Enhances the accuracy of predictions by effectively organizing data in a way that improves nearest neighbor searches.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Efficient Processing:</strong> Handles large datasets swiftly, making it ideal for real-time applications that require responsive performance.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          This project leverages the power of AVL Trees to improve the performance of k-Nearest Neighbors:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Node Structure:</strong> Each node in the tree holds values and maintains a balance factor to ensure quick data access and modifications with O(log n) time complexity.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Tree Operations:</strong> Supports efficient insertion, deletion, and lookup operations through carefully implemented rotation and balancing mechanisms.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Algorithm Integration:</strong> Combines AVL Trees with the k-Nearest Neighbors algorithm to classify data based on similarity, with optimized neighbor search procedures.
          </Text>
        </Column>
      </Column>
      
      {/* Performance Improvements */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Performance Improvements
        </Heading>
        <Text variant="body-default-m">
          The integration of AVL Trees with kNN yielded significant performance benefits:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Search Optimization:</strong> Reduced search times from O(n) to O(log n) for finding candidate neighbors in specific regions of the feature space.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Memory Efficiency:</strong> Improved memory usage by organizing data in a hierarchical structure that facilitates efficient traversal.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Scalability:</strong> Created a solution that scales effectively with dataset size, maintaining performance even as data volumes increase.
          </Text>
        </Column>
      </Column>
      
      {/* Application to Hackathon Data */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Application to Hackathon Data
        </Heading>
        <Text variant="body-default-m">
          The system was applied to analyze hackathon applications, providing several key benefits:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Skill Matching:</strong> Efficiently matched applicant skills with project requirements to form optimal teams.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Interest Clustering:</strong> Identified groups of applicants with similar interests to facilitate collaboration.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Experience Classification:</strong> Categorized applicants based on experience level to ensure balanced team compositions.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Real-time Analysis:</strong> Processed applications as they arrived, providing immediate insights without batch processing delays.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This project demonstrates my capability to integrate advanced data structures with machine learning algorithms, creating a powerful tool for data analysis and prediction. The combination of AVL Trees with k-Nearest Neighbors resulted in a system that is both accurate and efficient.
        </Text>
        <Text variant="body-default-m">
          This work showcases my problem-solving skills and technical expertise, highlighting my ability to optimize algorithms for real-world applications. It's a testament to my understanding of both theoretical computer science principles and their practical implementation.
        </Text>
      </Column>
    </Column>
  );
} 