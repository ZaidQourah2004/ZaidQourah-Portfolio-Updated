import { Column, Flex, Heading, Text, Tag, SmartImage, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Music Plagiarism Detection Software";
  const description = "A Python-based application designed to identify potential plagiarism in music compositions using advanced algorithms.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/music`,
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

export default function MusicPlagiarismDetection() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Music Plagiarism Detection Software",
            description: "A Python-based application designed to identify potential plagiarism in music compositions using advanced algorithms.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "Music Analysis",
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
          🎵 Music Plagiarism Detection Software
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Identifying musical similarities through advanced algorithms
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
          src="/images/projects/music2.jpg"
          alt="Music Plagiarism Detection Software"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button with Loading Indicator */}
      <DownloadButton 
        owner="ZaidQourah2004" 
        repo="PROJECTS"
        path="Projects/Python/Data Structures and Alogrithms Work/project04-fs23"
        newFolderName="Music-Plagiarism-Detection"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">Digital Signal Processing</Tag>
        <Tag size="l">Music Information Retrieval</Tag>
        <Tag size="l">Hash Algorithms</Tag>
        <Tag size="l">Data Structures</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Project Overview
        </Heading>
        <Text variant="body-default-m">
          Welcome to my Music Plagiarism Detection Software project, a Python-based application designed to identify potential similarities between music compositions. This tool uses advanced algorithms to analyze and compare musical patterns, helping composers, researchers, and copyright analysts identify possible instances of plagiarism.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Hash Function Implementation:</strong> Utilizes advanced hash functions to compare music segments, enabling efficient similarity detection.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Data Structures:</strong> Efficiently processes and stores music data for quick retrieval and comparison using optimized data structures.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Plagiarism Detection:</strong> Identifies similarities between music pieces using sophisticated algorithms that can detect both exact matches and similar patterns.
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          This project showcases my proficiency in Python programming, data structures, and algorithm implementation:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Import:</strong> Supports importing music data from various formats including MIDI, MP3, and WAV for analysis, with robust parsing and error handling.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Plagiarism Analysis Modules:</strong> Contains specialized modules for detecting potential plagiarism in music compositions, including melodic, harmonic, and rhythmic pattern recognition.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Interactive Analysis:</strong> Provides tools for detailed analysis and visualization of music plagiarism results, allowing users to understand the nature and extent of similarities.
          </Text>
        </Column>
      </Column>
      
      {/* Detection Techniques */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Detection Techniques
        </Heading>
        <Text variant="body-default-m">
          The software employs several advanced techniques to detect musical similarities:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Audio Fingerprinting:</strong> Creates digital signatures of audio segments that can be compared for similarity, similar to how Shazam identifies songs.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Melody Extraction:</strong> Isolates and compares melodic lines between compositions to identify similar musical phrases.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Harmonic Analysis:</strong> Examines chord progressions and harmonic structures to detect similarities in the underlying musical framework.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Locality-Sensitive Hashing:</strong> Uses specialized hashing techniques that group similar items together, making similarity detection more efficient.
          </Text>
        </Column>
      </Column>
      
      {/* Challenges and Solutions */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Challenges and Solutions
        </Heading>
        <Text variant="body-default-m">
          Developing this software presented several interesting challenges:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Musical Variations:</strong> Detecting plagiarism despite key changes, tempo differences, and arrangement variations required developing transformation-invariant comparison methods.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Processing Efficiency:</strong> Optimizing the algorithm to handle large music libraries and perform comparisons in reasonable time frames involved careful algorithm design and data structure selection.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>False Positives:</strong> Balancing sensitivity to detect actual plagiarism while minimizing false positives required fine-tuning of similarity thresholds and multiple validation checks.
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This project is a testament to my skills in software development, data analysis, and algorithm design. It serves as a powerful tool for music researchers and copyright analysts, enabling them to identify potential plagiarism with greater accuracy and efficiency.
        </Text>
        <Text variant="body-default-m">
          The Music Plagiarism Detection Software demonstrates my ability to apply complex computational techniques to creative fields, bridging the gap between technology and music. It showcases both technical expertise and an understanding of musical structures and compositions.
        </Text>
      </Column>
    </Column>
  );
} 