import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import React from "react";
import Image from "next/image";
import "@/styles/infinite-cards.css";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const skills = [
  { name: "Python", image: "https://cdn.simpleicons.org/python" },
  { name: "Java", image: "/images/java.svg" },
  { name: "JavaScript", image: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", image: "https://cdn.simpleicons.org/typescript" },
  { name: "MySQL", image: "https://cdn.simpleicons.org/mysql" },
  { name: "C++", image: "https://cdn.simpleicons.org/cplusplus" },
  { name: "Go", image: "https://cdn.simpleicons.org/go" },
  { name: "Git", image: "https://cdn.simpleicons.org/git" },
  { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb" },
  { name: "PostgreSQL", image: "https://cdn.simpleicons.org/postgresql" },
  { name: "Docker", image: "https://cdn.simpleicons.org/docker" },
  { name: "Assembly", image: "/images/assembly.svg" },

];

const frameworks = [
  { name: "React", image: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", image: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Spring", image: "https://cdn.simpleicons.org/spring" },
  { name: "Django", image: "https://cdn.simpleicons.org/django" },
  { name: "Flask", image: "https://cdn.simpleicons.org/flask" },
  { name: "FastAPI", image: "https://cdn.simpleicons.org/fastapi" },
  { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Svelte", image: "https://cdn.simpleicons.org/svelte" },
  { name: "Ray", image: "https://cdn.simpleicons.org/ray" },
  { name: "Ollama", image: "https://cdn.simpleicons.org/ollama" },
  { name: "Firebase", image: "https://cdn.simpleicons.org/firebase" },
  { name: "ScyllaDB", image: "https://cdn.simpleicons.org/scylladb" },
  { name: "Pandas", image: "https://cdn.simpleicons.org/pandas" },
  { name: "Numpy", image: "https://cdn.simpleicons.org/numpy" },
  { name: "Sympy", image: "https://cdn.simpleicons.org/sympy" },
  { name: "Scikit-Learn", image: "https://cdn.simpleicons.org/scikitlearn" },
];


// Map of company names to their logo files
const companyLogos = {
  "Quality Logistics Ltd Co.": "/images/ql2.png",
  "MSU AI Club": "/images/aiclub.svg",
  "Software Engineering & Computing Society": "/images/secs.png",
  "Michigan State University": "/images/msu.svg",
};

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
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

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.projects.title,
      display: about.projects.display,
      items: about.projects.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m" style={{ marginTop: '80px', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.projects.experiences[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="m"
            paddingTop="m"
            gap="m"
            flex={3}
            horizontal="center"
            style={{ marginTop: '0' }}
          >
            <div style={{ 
              width: '160px', 
              height: '160px', 
              borderRadius: '50%', 
              overflow: 'hidden',
              position: 'relative',
              margin: '0 auto'
            }}>
              <Image
                src={person.avatar}
                alt={`${person.firstName} ${person.lastName}`}
                fill
                sizes="(max-width: 768px) 160px, 160px"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority
              />
            </div>
            {person.location && (
              <Flex gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                {person.location}
              </Flex>
            )}
            {person.citizenship && (
              <Flex 
                gap="8" 
                vertical="center" 
                border="brand-medium" 
                background="brand-alpha-weak" 
                padding="8" 
                radius="m"
              >
                <Text as="span" variant="label-strong-m" style={{ fontSize: "1.2rem" }}>
                  {person.citizenshipIcon}
                </Text>
                <Text variant="body-default-s">
                  {person.citizenship}
                </Text>
              </Flex>
            )}
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="xl"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                {social.map(
                  (item, index) =>
                    item.link && (
                        <React.Fragment key={`social-${item.name}-${index}`}>
                            <Button
                                className="s-flex-hide"
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <>
              <Heading as="h2" id={about.intro.title} variant="display-strong-s" marginBottom="l">
                {about.intro.title}
              </Heading>
              <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl" style={{ marginTop: "-20px" }}>
                {about.intro.description}
              </Column>
            </>
          )}

          {/* Professional Focus Section - Moved up to appear after intro */}
          <Heading as="h2" id="professional-focus" variant="display-strong-s" marginBottom="l">
            Professional Focus
          </Heading>
          <Column fillWidth gap="xl" marginBottom="80">
            <Column gap="16">
              <Flex gap="12" padding="16" border="brand-medium" background="brand-alpha-weak" radius="m">
                <Icon name="chevronRight" size="l" onBackground="brand-weak" />
                <Column>
                  <Text variant="body-strong-l">Software Engineering</Text>
                  <Text variant="body-default-m">Designing and creating responsive and user-friendly software solutions.</Text>
                </Column>
              </Flex>
              
              <Flex gap="12" padding="16" border="brand-medium" background="brand-alpha-weak" radius="m">
                <Icon name="checkCircle" size="l" onBackground="brand-weak" />
                <Column>
                  <Text variant="body-strong-l">AI & Machine Learning</Text>
                  <Text variant="body-default-m">Implementing ML algorithms using Python, TensorFlow, and Scikit-Learn.</Text>
                </Column>
              </Flex>
              
              <Flex gap="12" padding="16" border="brand-medium" background="brand-alpha-weak" radius="m">
                <Icon name="infoCircle" size="l" onBackground="brand-weak" />
                <Column>
                  <Text variant="body-strong-l">Backend Development</Text>
                  <Text variant="body-default-m">Dynamic data manipulation and real-time database management.</Text>
                </Column>
              </Flex>
              
              <Flex gap="12" padding="16" border="brand-medium" background="brand-alpha-weak" radius="m">
                <Icon name="grid" size="l" onBackground="brand-weak" />
                <Column>
                  <Text variant="body-strong-l">Frontend Development</Text>
                  <Text variant="body-default-m">Developing interactive and responsive user interfaces.</Text>
                </Column>
              </Flex>
            </Column>
          </Column>

          {about.projects.display && (
            <>
              <Heading as="h2" id={about.projects.title} variant="display-strong-s" marginBottom="l">
                {about.projects.title}
              </Heading>
              <Column fillWidth gap="xl" marginBottom="80">
                {about.projects.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="8">
                      <Flex gap="12" vertical="center" style={{ maxWidth: '75%' }}>
                        {companyLogos[experience.company] && (
                          <div style={{ width: '40px', height: '40px', position: 'relative' }}>
                            <Image 
                              src={companyLogos[experience.company]} 
                              alt={experience.company}
                              width={40}
                              height={40}
                              style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
                            />
                          </div>
                        )}
                        <Text id={experience.company} variant="heading-strong-m" style={{ 
                          wordBreak: 'break-word',
                          fontSize: experience.company === "Software Engineering & Computing Society" ? "1.2rem" : "1.2rem"
                        }}>
                          {experience.company}
                        </Text>
                      </Flex>
                      <Text variant="heading-default-xs" onBackground="neutral-weak" style={{ flexShrink: 0, textAlign: 'right' }}>
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text 
                      variant="body-default-s" 
                      onBackground="brand-weak" 
                      marginBottom="s"
                      style={{ marginLeft: companyLogos[experience.company] ? '52px' : '0' }}
                    >
                      {experience.role}
                    </Text>
                    <Column 
                      as="ul" 
                      gap="16" 
                      style={{ marginLeft: companyLogos[experience.company] ? '52px' : '0' }}
                    >
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                          style={{ 
                            listStyleType: 'disc',  
                            marginLeft: '20px' 
                          }}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="l">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="xl" marginBottom="80">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth>
                    <Flex
                      fillWidth
                      background="brand-alpha-weak" 
                      border="brand-medium"
                      radius="m"
                      padding="24"
                      direction="column"
                      gap="20"
                      style={{ overflowX: 'hidden' }}
                    >
                      <Flex gap="16" vertical="center">
                        {companyLogos[institution.name] && (
                          <div style={{ width: '40px', height: '40px', position: 'relative' }}>
                            <Image 
                              src={companyLogos[institution.name]} 
                              alt={institution.name}
                              width={40}
                              height={40}
                              style={{ objectFit: 'contain', width: 'auto', height: 'auto' }}
                            />
                          </div>
                        )}
                        <Text id={institution.name} variant="heading-strong-m" style={{ fontSize: "1.2rem" }}>
                          {institution.name}
                        </Text>
                      </Flex>
                      
                      {/* Group Degree & Minor */}
                      <Flex gap="16" wrap marginTop="8">
                        <Column gap="8" style={{ flex: '1 1 100%', marginBottom: '16px' }}>
                          <Text variant="body-strong-m">Major</Text>
                          <Text 
                            variant="body-default-m" 
                            style={{ 
                              wordBreak: 'break-word',
                              hyphens: 'auto',
                              fontSize: '0.9rem'
                            }}
                          >
                            Bachelor of Science,<br />Computer Science Engineering
                          </Text>
                        </Column>
                        <Column gap="8" style={{ flex: '1 1 100%', marginBottom: '16px' }}>
                          <Text variant="body-strong-m">Minor</Text>
                          <Text variant="body-default-m">Economics</Text>
                        </Column>
                      </Flex>
                      
                      {/* Group GPA & Graduation */}
                      <Flex gap="16" wrap marginTop="8">
                        <Column gap="8" style={{ flex: '1 1 100%', marginBottom: '16px' }}>
                          <Text variant="body-strong-m">GPA</Text>
                          <Text variant="body-default-m">3.98</Text>
                        </Column>
                        <Column gap="8" style={{ flex: '1 1 100%', marginBottom: '16px' }}>
                          <Text variant="body-strong-m">Expected Graduation</Text>
                          <Text variant="body-default-m">Fall 2025</Text>
                        </Column>
                      </Flex>
                      
                      {/* Add Relevant Coursework - slightly more spacing */}
                      <Column gap="12" marginTop="12">
                        <Text variant="body-strong-m">Relevant Coursework</Text>
                        <Flex wrap gap="8">
                          {[
                            "Algorithms & Data Structures",
                            "Object-Oriented Software Design",
                            "Database Systems",
                            "Autonomous Vehicles",
                            "Big Data Analysis",
                            "Computer Organization & Architecture",
                            "Biometrics & Pattern Recognition"
                          ].map((course, idx) => (
                            <Tag key={idx} size="m" background="brand-alpha-weak" border="brand-medium">
                              {course}
                            </Tag>
                          ))}
                        </Flex>
                      </Column>
                    </Flex>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Honors & Awards Section */}
          <Heading as="h2" id="honors-awards" variant="display-strong-s" marginBottom="l">
            Honors & Awards
          </Heading>
          <Column fillWidth gap="xl" marginBottom="80">
            <Column fillWidth gap="16">
              <Text variant="heading-strong-l" style={{ fontSize: "1.2rem" }}>Academic Achievements</Text>
              <Column as="ul" gap="16" style={{ marginTop: '8px' }}>
                <Text as="li" variant="body-default-m" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                  4x Dean's List
                </Text>
                <Text as="li" variant="body-default-m" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                  MSU Academic Scholarship
                </Text>
              </Column>
            </Column>
          </Column>

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="l"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="xl" marginBottom="xl">
                {/* Static Skills Cards Grid */}
                <Column fillWidth gap="16">
                  <Text variant="heading-strong-l" style={{ fontSize: "1.2rem" }}>Languages & Tools</Text>
                  <Flex wrap gap="16" paddingY="12" style={{ justifyContent: 'flex-start' }}>
                    {skills.map((skill, index) => (
                      <Flex 
                        key={index}
                        direction="column"
                        align="center"
                        background="brand-alpha-weak"
                        border="brand-medium"
                        radius="m"
                        padding="20"
                        gap="12"
                        style={{ 
                          flexBasis: 'calc(50% - 8px)',
                          minHeight: '100px',
                          boxSizing: 'border-box',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          position: 'relative', 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                        <img
                          src={skill.image}
                          alt={skill.name}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(170%, -50%)',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                        />
                        </div>
                        <Text variant="body-strong-s" style={{ textAlign: 'center' }}>{skill.name}</Text>
                      </Flex>
                    ))}
                  </Flex>
                </Column>
                
                {/* Frameworks & Libraries */}
                <Column fillWidth gap="16">
                  <Text variant="heading-strong-l" style={{ fontSize: "1.2rem" }}>Frameworks & Libraries</Text>
                  <Flex wrap gap="16" paddingY="12" style={{ justifyContent: 'flex-start' }}>
                    {frameworks.map((framework, index) => (
                      <Flex 
                        key={index}
                        direction="column"
                        align="center"
                        background="brand-alpha-weak"
                        border="brand-medium"
                        radius="m"
                        padding="20"
                        gap="12"
                        style={{ 
                          flexBasis: 'calc(50% - 8px)',
                          minHeight: '100px',
                          boxSizing: 'border-box',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          position: 'relative', 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <img
                            src={framework.image}
                            alt={framework.name}
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(170%, -50%)',
                              maxWidth: '100%',
                              maxHeight: '100%',
                              width: 'auto',
                              height: 'auto'
                            }}
                          />
                        </div>
                        <Text variant="body-strong-s" style={{ textAlign: 'center' }}>{framework.name}</Text>
                      </Flex>
                    ))}
                  </Flex>
                </Column>
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
