import { Button, Column, Flex, Heading, Text, Tag, SmartImage } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "Movie Recommendation System";
  const description = "A web-based recommender system using collaborative filtering techniques.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/movie-recommendation`,
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

export default function MovieRecommendation() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Movie Recommendation System",
            description: "A web-based recommender system using collaborative filtering techniques.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
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
          Movie Recommendation System
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          A web-based recommender system using collaborative filtering techniques
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
          src="/images/projects/movie-recommendation.png"
          alt="Movie Recommendation System"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button */}
      <DownloadButton
        owner="ZaidQourah2004"
        repo="Movie-Recommender"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">Python</Tag>
        <Tag size="l">Flask</Tag>
        <Tag size="l">NumPy</Tag>
        <Tag size="l">Pandas</Tag>
        <Tag size="l">JavaScript</Tag>
        <Tag size="l">HTML/CSS</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Overview
        </Heading>
        <Text variant="body-default-m">
          This project implements a comprehensive movie recommendation system using collaborative filtering techniques. It leverages the MovieLens dataset to provide personalized movie recommendations based on user preferences and behavior patterns.
        </Text>
        <Text variant="body-default-m">
          The system features both user-based and item-based collaborative filtering algorithms, allowing for comparison between different recommendation approaches. Additionally, the project includes a user-friendly web interface for seamless interaction with the recommendation engine.
        </Text>
      </Column>
      
      {/* Key Features */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Key Features
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>User-based collaborative filtering</strong> - Recommends movies based on preferences of similar users
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Item-based collaborative filtering</strong> - Suggests movies similar to those a user has highly rated
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Algorithm performance comparison</strong> - Evaluates and compares the accuracy of different recommendation approaches
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>User authentication system</strong> - Secure login to maintain personalized user profiles and ratings
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Similar user recommendations</strong> - Discover users with similar movie tastes
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Responsive web interface</strong> - User-friendly design that works across devices
          </Text>
        </Column>
      </Column>
      
      {/* Technical Implementation */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Implementation
        </Heading>
        <Text variant="body-default-m">
          The recommendation system was built using the following approach:
        </Text>
        <Column as="ol" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Selection:</strong> The MovieLens dataset was chosen for its comprehensive collection of movie ratings from thousands of users.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Collaborative Filtering Algorithms:</strong>
            <Column as="ul" gap="s" paddingLeft="m">
              <Text as="li" variant="body-default-m">
                <em>User-based:</em> For each user, the system calculates their top-k nearest neighbors (users with similar preferences) and uses weighted average ratings to predict items the user might like.
              </Text>
              <Text as="li" variant="body-default-m">
                <em>Item-based:</em> For each movie, the system identifies similar movies based on rating patterns and recommends these to users who enjoyed related content.
              </Text>
            </Column>
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Evaluation:</strong> The algorithms were evaluated using training and test datasets, with metrics like Mean Absolute Error (MAE) and Root Mean Square Error (RMSE) to measure prediction accuracy.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Web Interface:</strong> A Flask-based web application was developed to provide an intuitive interface for users to:
            <Column as="ul" gap="s" paddingLeft="m">
              <Text as="li" variant="body-default-m">Login and maintain a profile</Text>
              <Text as="li" variant="body-default-m">View and rate movies</Text>
              <Text as="li" variant="body-default-m">Receive personalized recommendations</Text>
              <Text as="li" variant="body-default-m">Discover similar users</Text>
            </Column>
          </Text>
        </Column>
      </Column>
      
      {/* Results and Findings */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Results and Findings
        </Heading>
        <Text variant="body-default-m">
          Through implementation and testing, several key insights were gained:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            The item-based approach generally provided more accurate recommendations for users with extensive rating histories.
          </Text>
          <Text as="li" variant="body-default-m">
            User-based filtering performed better for new users with limited ratings (addressing the cold-start problem).
          </Text>
          <Text as="li" variant="body-default-m">
            Incorporating movie metadata (genres, directors, actors) improved recommendation quality, especially in cases with sparse rating data.
          </Text>
          <Text as="li" variant="body-default-m">
            Performance optimization techniques were critical for handling the large dataset efficiently.
          </Text>
        </Column>
        <Text variant="body-default-m">
          The final system successfully demonstrates how collaborative filtering techniques can be applied to create personalized movie recommendations, providing users with relevant content based on their preferences and similar users' behaviors.
        </Text>
      </Column>
      
      {/* Technical Challenges */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Technical Challenges
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Data Sparsity:</strong> Handling the inherent sparsity of user-movie rating matrices required specialized techniques to ensure recommendation quality.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Scalability:</strong> Optimizing algorithms to efficiently process large datasets while maintaining reasonable response times for web users.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Cold Start Problem:</strong> Developing strategies to provide recommendations for new users with limited or no rating history.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Real-Time Updates:</strong> Implementing a system that could dynamically update recommendations as users provided new ratings.
          </Text>
        </Column>
      </Column>
      
      {/* Future Enhancements */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          Future Enhancements
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            Implementing hybrid recommendation approaches combining collaborative filtering with content-based methods
          </Text>
          <Text as="li" variant="body-default-m">
            Adding natural language processing to analyze movie reviews for sentiment-based recommendations
          </Text>
          <Text as="li" variant="body-default-m">
            Incorporating machine learning models to improve prediction accuracy over time
          </Text>
          <Text as="li" variant="body-default-m">
            Developing a mobile application for on-the-go movie recommendations
          </Text>
          <Text as="li" variant="body-default-m">
            Integrating with streaming services to provide direct access to recommended content
          </Text>
        </Column>
      </Column>
      
      {/* Conclusion */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          Conclusion
        </Heading>
        <Text variant="body-default-m">
          This movie recommendation system successfully demonstrates the implementation of collaborative filtering techniques in a practical, user-friendly application. By leveraging both user-based and item-based approaches, the system provides personalized movie suggestions that align with individual user preferences.
        </Text>
        <Text variant="body-default-m">
          The project showcases how recommendation algorithms can be effectively integrated into web applications to enhance user experience and content discovery. Through comparative analysis of different recommendation strategies, the system also provides valuable insights into the strengths and limitations of various collaborative filtering approaches.
        </Text>
      </Column>
    </Column>
  );
} 