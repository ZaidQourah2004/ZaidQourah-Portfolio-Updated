import { Button, Column, Flex, Heading, Text, Tag, SmartImage } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Review Tool";
  const description = "A comprehensive code review platform with CLI, API, job processor, and web frontend.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/review-tool`,
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

export default function ReviewTool() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Review Tool",
            description: "A comprehensive code review platform with CLI, API, job processor, and web frontend.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "DeveloperApplication",
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
        <Heading variant="display-strong-xl">
          Review Tool
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          A comprehensive code review platform with CLI, API, job processor, and web frontend
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
          src="/images/projects/review-tool3.png"
          alt="Review Tool Project"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button */}
      <DownloadButton
        owner="ZaidQourah2004"
        repo="review_tool"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Go</Tag>
        <Tag size="l">gRPC</Tag>
        <Tag size="l">Docker</Tag>
        <Tag size="l">Svelte</Tag>
        <Tag size="l">ScyllaDB</Tag>
        <Tag size="l">SSH Auth</Tag>
        <Tag size="l">BSON</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Introduction
        </Heading>
        <Text variant="body-default-m">
          The Review Tool is a comprehensive platform designed to streamline the code review process for development teams. It consists of several integrated components including a CLI, API, Job Processor, and web frontend, providing a complete solution for managing and reviewing code changes.
        </Text>
        <Text variant="body-default-m">
          This tool was built to address common challenges in code review workflows by offering a secure, efficient system that handles everything from git diff uploads to review comments and approvals.
        </Text>
      </Column>
      
      {/* Architecture */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Architecture
        </Heading>
        <Text variant="body-default-m">
          The Review Tool project is composed of the following components:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>CLI:</strong> A command-line interface for interacting with the Review Tool services. This tool primarily uploads git diffs to the API server with SSH keys as authentication.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>API:</strong> A gRPC-based API service that handles requests and responses, and orchestrates any jobs/actions needed on code reviews. Authentication is performed by taking an SSH private key from the user and hashing the commit message, which the server verifies using the user's public key submitted through the web UI.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Job Processor:</strong> A service responsible for processing jobs on code reviews. Tasks like static analysis, linting, etc. are handled here.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Web Frontend:</strong> A Svelte-based web interface for user interaction, allowing users to view changes, leave comments, and approve changes.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>ScyllaDB:</strong> A NoSQL database used for storing metadata about every review. The reviews themselves are stored on the filesystem.
          </Text>
        </Column>
        <Text variant="body-default-m">
          The components communicate with each other using gRPC and are containerized using Docker. The docker-compose.yml file orchestrates the services, ensuring they are built and run in the correct order with the necessary dependencies.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Secure SSH Authentication:</strong> Uses SSH keys for secure user authentication, both in the CLI and server components.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Git Diff Handling:</strong> Efficiently creates and processes diffs based on git commits.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Encrypted Storage:</strong> Uploads diffs to a database with encryption using SSH keys.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Docker Integration:</strong> Fully containerized for easy deployment and scalability.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Static Analysis:</strong> Automated code quality checks through the job processor.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Collaborative Reviews:</strong> Web interface for team members to comment on and approve changes.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Configurable TLS:</strong> Options to enable or disable secure HTTPS connections.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          The tool was implemented using a range of technologies and approaches:
        </Text>
        
        <Heading variant="heading-strong-s">Go Development Structure</Heading>
        <Text variant="body-default-m">
          The Go codebase follows a structured approach:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>/cmd:</strong> Contains all standalone packages that are part of this project.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>/pkg:</strong> Contains shared code between packages in cmd, such as proto files and generated Go code.
          </Text>
        </Column>
        
        <Heading variant="heading-strong-s">Authentication</Heading>
        <Text variant="body-default-m">
          The authentication system uses SSH keys in an innovative way:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            Users submit their public key through the web UI.
          </Text>
          <Text as="li" variant="body-default-m">
            When using the CLI, the user's private key signs the commit message.
          </Text>
          <Text as="li" variant="body-default-m">
            The server verifies the signature using the stored public key.
          </Text>
        </Column>
        
        <Heading variant="heading-strong-s">Data Storage</Heading>
        <Text variant="body-default-m">
          The system uses a hybrid approach to data storage:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            ScyllaDB stores metadata using BSON for efficient NoSQL storage.
          </Text>
          <Text as="li" variant="body-default-m">
            The filesystem stores the actual review content for performance and separation of concerns.
          </Text>
        </Column>
        
        <Heading variant="heading-strong-s">Frontend Development</Heading>
        <Text variant="body-default-m">
          The web interface is built with Svelte, providing a responsive and interactive user experience:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            Real-time updates for collaborative reviews.
          </Text>
          <Text as="li" variant="body-default-m">
            Intuitive interface for commenting on specific code lines.
          </Text>
          <Text as="li" variant="body-default-m">
            User management and review approval workflows.
          </Text>
        </Column>
      </Column>
      
      {/* Installation and Usage */}
      <Column gap="m" padding="l" border="neutral-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Quick Start/Installation
        </Heading>
        <Text variant="body-default-m" style={{ fontWeight: 'bold' }}>
          DO NOT RUN RANDOM COMMANDS ON THE INTERNET!<br />Take a look at the scripts in the repo before running the commands below to install the tool.
        </Text>
        <Text variant="body-default-m">
          Install the latest release with a single command:
        </Text>
        
        <Text variant="body-strong-s">For macOS/Linux:</Text>
        <Flex 
          background="neutral-medium" 
          padding="m" 
          radius="m" 
          style={{ 
            fontFamily: "var(--font-code)",
            overflowX: "auto" 
          }}
        >
          <Text variant="body-default-s">
            curl -sL https://raw.githubusercontent.com/AbhayFernandes/review_tool/main/install.sh | bash
          </Text>
        </Flex>
        
        <Text variant="body-strong-s">For Windows (PowerShell):</Text>
        <Flex 
          background="neutral-medium" 
          padding="m" 
          radius="m" 
          style={{ 
            fontFamily: "var(--font-code)",
            overflowX: "auto" 
          }}
        >
          <Text variant="body-default-s">
            iwr -useb https://raw.githubusercontent.com/AbhayFernandes/review_tool/main/install.ps1 | iex
          </Text>
        </Flex>
      </Column>
      
      {/* Development and Contributing */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Development and Contributing
        </Heading>
        <Text variant="body-default-m">
          The project uses a Makefile with various commands for building, running, testing, and cleaning up components:
        </Text>
        
        <Heading variant="heading-strong-s">Build Commands</Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <code>make build</code>: Build all components (API, Job Processor, CLI, and web).
          </Text>
          <Text as="li" variant="body-default-m">
            <code>make build-go</code>: Build all Go components (API, Job Processor, and CLI).
          </Text>
          <Text as="li" variant="body-default-m">
            <code>make build-cli</code>: Build the CLI binary.
          </Text>
          <Text as="li" variant="body-default-m">
            <code>make build-docker</code>: Build all Docker images.
          </Text>
        </Column>
        
        <Heading variant="heading-strong-s">Run Commands</Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <code>make run-cli</code>: Run the CLI with arguments.
          </Text>
          <Text as="li" variant="body-default-m">
            <code>make up</code>: Start all services with Docker Compose.
          </Text>
          <Text as="li" variant="body-default-m">
            <code>make down</code>: Stop all services with Docker Compose.
          </Text>
        </Column>
      </Column>
      
      {/* Challenges and Solutions */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Challenges and Solutions
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Secure Authentication:</strong> Implementing SSH-based authentication required careful design to ensure security while maintaining usability. The solution uses public/private key pairs with commit message signing for verification.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Distributed Architecture:</strong> Managing communication between multiple components needed a robust approach. gRPC was chosen for its efficiency and strong typing.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Docker Orchestration:</strong> Ensuring proper service initialization order and dependency management was solved through careful docker-compose configuration.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>TLS Implementation:</strong> Adding configurable TLS support required careful handling of certificates and secure connections across components.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          The Review Tool represents a comprehensive solution for modern code review workflows, combining security, efficiency, and collaboration in a well-architected system. By integrating multiple components from CLI to web interface through a containerized environment, it provides teams with a powerful platform for improving code quality and developer collaboration.
        </Text>
        <Text variant="body-default-m">
          The project demonstrates proficiency in Go development, distributed systems architecture, authentication mechanisms, and frontend development, resulting in a tool that addresses real-world development team needs.
        </Text>
      </Column>
    </Column>
  );
} 