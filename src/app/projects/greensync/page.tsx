import { Button, Column, Flex, Heading, Text, Tag, SmartImage } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import DownloadButton from "@/components/DownloadButton";

export async function generateMetadata() {
  const title = "GreenSync - Decentralized AI for a Greener Future";
  const description = "A decentralized AI platform that distributes computation across user devices, reducing reliance on energy-hungry cloud servers.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/greensync`,
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

export default function GreenSync() {
  return (
    <Column maxWidth="l" paddingX="xl" paddingY="xl" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GreenSync",
            description: "A decentralized AI platform that distributes computation across user devices, reducing reliance on energy-hungry cloud servers.",
            author: {
              "@type": "Person",
              name: person.name,
            },
            applicationCategory: "AI",
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
          🌿 GreenSync: Decentralized AI for a Greener Future 🌎
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak">
          Bringing AI computation to your devices while saving the planet!
        </Text>
      </Flex>
      
      {/* Project Image */}
      <Flex 
        border="neutral-medium" 
        radius="l"
        overflow="hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <SmartImage
          src="/images/projects/greensync-h.png"
          alt="GreenSync Project"
          enlarge
          fill
        />
      </Flex>
      
      {/* Download Button */}
      <DownloadButton
        owner="ZaidQourah2004"
        repo="GreenSync"
      />
      
      {/* Tech Stack */}
      <Flex gap="m" wrap>
        <Tag size="l">JavaScript</Tag>
        <Tag size="l">Python</Tag>
        <Tag size="l">React</Tag>
        <Tag size="l">FastAPI</Tag>
        <Tag size="l">Ray</Tag>
        <Tag size="l">Ollama</Tag>
      </Flex>
      
      {/* Project Overview */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          🌟 Inspiration
        </Heading>
        <Text variant="body-default-m">
          AI is amazing, but its environmental impact? Not so much. 😟💨
          Millions use AI daily, relying on energy-hungry data centers that consume vast amounts of electricity.
        </Text>
        <Text variant="body-default-m">
          We asked ourselves:
        </Text>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">What if AI models could run on a decentralized network instead?</Text>
          <Text as="li" variant="body-default-m">What if users were rewarded for contributing computing power?</Text>
          <Text as="li" variant="body-default-m">What if AI usage could be eco-friendly and still powerful?</Text>
        </Column>
        <Text variant="body-default-m">
          Thus, GreenSync was born—an AI system that distributes computation across multiple devices, reducing reliance on the cloud while giving users green coins for their contributions. 💰♻️
        </Text>
      </Column>
      
      {/* What It Does */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          💡 What It Does
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Decentralized AI Compute</strong> – Instead of using centralized servers, GreenSync splits AI workloads across users' devices.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Green Coins</strong> – Earn rewards based on your device's contribution to AI processing. 🏅
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Real-time Impact Tracking</strong> – See your carbon savings and track your contribution to a sustainable AI ecosystem. 🌍
          </Text>
        </Column>
        <Text variant="body-default-m">
          Your laptop or desktop can now be part of a global AI network—without relying on cloud servers! 🚀
        </Text>
      </Column>
      
      {/* How We Built It */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          🛠 How We Built It
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>Backend:</strong> FastAPI 🏗️ handles user authentication, API endpoints, and credit calculations.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Distributed Computing:</strong> Ray ⚡ efficiently distributes AI tasks across connected devices.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Frontend:</strong> React + TailwindCSS 🎨 provides a sleek, real-time user experience.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>LLM Processing:</strong> Ollama 🧠 runs AI models locally without needing cloud GPUs.
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Data Sync:</strong> Firebase 🔥 keeps track of green coins, user data, and system metrics.
          </Text>
        </Column>
        <Text variant="body-default-m">
          Instead of traditional AI cloud models, we use a dynamic resource-sharing system that distributes AI tasks among connected devices. No expensive cloud needed! 🌱
        </Text>
      </Column>
      
      {/* Challenges */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          ⚡ Challenges We Faced
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">Running computation in the browser was difficult due to security and performance constraints.</Text>
          <Text as="li" variant="body-default-m">Balancing AI workloads across devices while preventing overload was tricky.</Text>
          <Text as="li" variant="body-default-m">Keeping green coin balances accurate & real-time across the dashboard and donation pages.</Text>
          <Text as="li" variant="body-default-m">Optimizing Ray's scheduling algorithms to maximize efficiency across different hardware configurations.</Text>
        </Column>
      </Column>
      
      {/* Accomplishments */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          🎉 Accomplishments We're Proud Of
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">
            <strong>AI Runs Without the Cloud</strong> – Successfully distributed AI processing without relying on cloud infrastructure. 🌍
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Green Coin System</strong> – A real-time reward system that fairly distributes credits based on contribution. 💰
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Engaging UI</strong> – Built an interactive, user-friendly dashboard that tracks earnings & impact. 📊
          </Text>
          <Text as="li" variant="body-default-m">
            <strong>Optimized Task Scheduling</strong> – Made Ray super efficient in splitting workloads across devices. ⚡
          </Text>
        </Column>
      </Column>
      
      {/* What's Next */}
      <Column gap="m">
        <Heading variant="display-strong-m">
          🚀 What's Next for GreenSync?
        </Heading>
        <Column as="ul" gap="s" paddingLeft="m">
          <Text as="li" variant="body-default-m">Support for more AI models – expand compatibility with bigger and better AI models.</Text>
          <Text as="li" variant="body-default-m">Smarter task allocation – improve real-time resource distribution for efficiency.</Text>
          <Text as="li" variant="body-default-m">AI compute pools – allow users to team up for even larger AI projects!</Text>
          <Text as="li" variant="body-default-m">Real-world impact – convert green coins into carbon offset donations for sustainability projects. 🌱💚</Text>
        </Column>
      </Column>
      
      {/* Try It Out */}
      <Column gap="m" padding="l" border="brand-medium" background="neutral-alpha-weak" radius="l">
        <Heading variant="display-strong-m">
          🌍 Try It Out!
        </Heading>
        <Column gap="m">
          <Text variant="body-strong-m">💻 Run the GreenSync server:</Text>
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
              export RAY_ENABLE_WINDOWS_OR_OSX_CLUSTER=1<br />
              ray start --head --port=6379<br />
              uvicorn server:app --host 0.0.0.0 --port=8000
            </Text>
          </Flex>
          
          <Text variant="body-strong-m">🖥️ Connect another device as a worker:</Text>
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
              export RAY_ENABLE_WINDOWS_OR_OSX_CLUSTER=1<br />
              ray start --address=&lt;your_ip&gt;:6379
            </Text>
          </Flex>
          
          <Text variant="body-strong-m">🌐 Run the frontend:</Text>
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
              npm install<br />
              npm start
            </Text>
          </Flex>
        </Column>
      </Column>
      
      {/* Call to Action */}
      <Column gap="m" horizontal="center" paddingTop="l">
        <Heading variant="display-strong-m" className="text-center">
          🌟 Join the Future of Decentralized AI!
        </Heading>
        <Text variant="body-default-m" style={{ textAlign: 'center' }}>
          🛠️ Contribute to the project! Fork the repo and help make AI more sustainable!<br />
          💚 Support the cause! Spread the word and help reduce AI's carbon footprint! 🌍<br />
          Let's make AI greener, fairer, and more accessible together! 🌱🚀
        </Text>
        <Text variant="body-default-s" style={{ textAlign: 'center' }} onBackground="neutral-weak">
          🎨 Designed with love for the planet. 🌎💚 GreenSync - AI that cares.
        </Text>
      </Column>
    </Column>
  );
} 