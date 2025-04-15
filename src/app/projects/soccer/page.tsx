import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Soccer Prediction Model";
  const description = "A machine learning model for predicting soccer match outcomes based on comprehensive player and team statistics.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/soccer`,
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

export default function SoccerPredictor() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Soccer Prediction Model",
            description: "A machine learning model for predicting soccer match outcomes based on comprehensive player and team statistics.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Machine Learning",
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
          ⚽ Soccer Prediction Model
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Predicting match outcomes with data science and machine learning
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
          src="/images/projects/epl.png"
          alt="Soccer Prediction Model"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton owner="ZaidQourah2004" repo="Soccer-Predictor" />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">Pandas</Tag>
        <Tag size="l">Scikit-learn</Tag>
        <Tag size="l">Spring Boot</Tag>
        <Tag size="l">PostgreSQL</Tag>
        <Tag size="l">Data Scraping</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Introducing <strong>Soccer Predictor</strong>, a comprehensive project designed to scrape match statistics for over 700 players, manipulate and present the data dynamically, and predict match outcomes using machine learning.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Scraping:</strong> Engineered a comprehensive data scraping of match statistics for 700+ players using Python and pandas.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Backend:</strong> Dynamic manipulation and presentation of the scraped data through a Spring Boot application.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Database:</strong> Real-time data manipulation within a PostgreSQL database using SQL queries.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Machine Learning:</strong> Created a model to predict match outcomes by integrating data scraping with pandas and machine learning with scikit-learn.
          </Text>
        </Column>
      </Column>
      
      {/* Components */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Components
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Scraping:</strong> <em>Technology:</em> Python, pandas. This component scrapes match statistics for over 700 players and stores the data in a CSV file for further processing.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Backend:</strong> <em>Technology:</em> Spring Boot, Java. This component dynamically manipulates and presents the scraped data. It uses SQL queries to manage real-time data manipulation within a PostgreSQL database.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Machine Learning:</strong> <em>Technology:</em> Python, scikit-learn, pandas. This component creates a machine learning model to predict match outcomes based on the scraped data.
          </Text>
        </Column>
      </Column>
      
      {/* Methodology */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Methodology
        </Heading>
        <Text variant="body-default-m">
          The project follows a comprehensive approach to data collection, processing, and prediction:
        </Text>
        <Column as="ol" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Collection:</strong> Automated web scraping scripts gather player statistics and match results from reliable sources.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Data Processing:</strong> Raw data is cleaned, normalized, and transformed into feature sets suitable for machine learning.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Model Training:</strong> Various machine learning algorithms are evaluated to find the most accurate prediction model.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>User Interface:</strong> Results are presented through an intuitive interface that allows users to explore predictions and underlying statistics.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This project exemplifies my ability to integrate various technologies and techniques to create a powerful and versatile application. It demonstrates my skills in data science, machine learning, and full-stack development, making it a valuable addition to my portfolio.
        </Text>
        <Text variant="body-default-m">
          The Soccer Prediction Model is not just a technical achievement but also a practical tool that can be used by sports analysts, enthusiasts, and betting professionals to gain insights into match outcomes based on comprehensive data analysis.
        </Text>
      </Column>
    </Column>
  );
} 