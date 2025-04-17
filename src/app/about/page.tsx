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
  { name: "Python", image: "/images/icons/python.svg" },
  { name: "Java", image: "/images/java.svg" },
  { name: "JavaScript", image: "/images/icons/javascript.svg" },
  { name: "TypeScript", image: "/images/icons/typescript.svg" },
  { name: "MySQL", image: "/images/icons/mysql.svg" },
  { name: "C++", image: "/images/icons/cplusplus.svg" },
  { name: "Go", image: "/images/icons/go.svg" },
  { name: "Git", image: "/images/icons/git.svg" },
  { name: "MongoDB", image: "/images/icons/mongodb.svg" },
  { name: "PostgreSQL", image: "/images/icons/postgresql.svg" },
  { name: "Docker", image: "/images/icons/docker.svg" },
  { name: "Assembly", image: "/images/assembly.svg" },
];

const frameworks = [
  { name: "React", image: "/images/icons/react.svg" },
  { name: "Next.js", image: "/images/icons/nextdotjs.svg" },
  { name: "Spring", image: "/images/icons/spring.svg" },
  { name: "Django", image: "/images/icons/django.svg" },
  { name: "Flask", image: "/images/icons/flask.svg" },
  { name: "FastAPI", image: "/images/icons/fastapi.svg" },
  { name: "Tailwind CSS", image: "/images/icons/tailwindcss.svg" },
  { name: "Node.js", image: "/images/icons/nodedotjs.svg" },
  { name: "Svelte", image: "/images/icons/svelte.svg" },
  { name: "Ray", image: "/images/icons/ray.svg" },
  { name: "Ollama", image: "/images/icons/ollama.svg" },
  { name: "Firebase", image: "/images/icons/firebase.svg" },
  { name: "ScyllaDB", image: "/images/icons/scylladb.svg" },
  { name: "Pandas", image: "/images/icons/pandas.svg" },
  { name: "Numpy", image: "/images/icons/numpy.svg" },
  { name: "Sympy", image: "/images/icons/sympy.svg" },
  { name: "Scikit-Learn", image: "/images/icons/scikitlearn.svg" },
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
    <Column maxWidth="m" style={{ marginTop: '80px', overflowX: 'hidden', minHeight: 'calc(100vh - 160px)' }}>
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
              margin: '0 auto',
              willChange: 'contents',
              contain: 'strict'
            }}>
              <Image
                src={person.avatar}
                alt={`${person.firstName} ${person.lastName}`}
                fill
                sizes="160px"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEGQI4/9wnGQAAAABJRU5ErkJggg=="
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
                          <div style={{ width: '40px', height: '40px', position: 'relative', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {companyLogos[experience.company].includes('ql2.png') ? (
                              // Special case for ql2.png that has aspect ratio warnings
                              <img 
                                src={companyLogos[experience.company]}
                                alt={experience.company}
                                style={{ 
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain'
                                }}
                              />
                            ) : (
                              <Image 
                                src={companyLogos[experience.company]} 
                                alt={experience.company}
                                width={40}
                                height={40}
                                unoptimized={companyLogos[experience.company].endsWith('.svg')}
                                style={{ 
                                  objectFit: 'contain',
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  width: 'auto',
                                  height: 'auto'
                                }}
                                loading="eager"
                              />
                            )}
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
                            style={{
                              width: 'auto',
                              height: 'auto'
                            }}
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
                              style={{
                                width: 'auto',
                                height: 'auto'
                              }}
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
                          <div style={{ width: '40px', height: '40px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image 
                              src={companyLogos[institution.name]} 
                              alt={institution.name}
                              width={40}
                              height={40}
                              unoptimized
                              style={{ 
                                objectFit: 'contain',
                                maxWidth: '100%',
                                maxHeight: '100%'
                              }}
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
                          Computer Science Engineering
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
                          height: '120px',
                          boxSizing: 'border-box',
                          justifyContent: 'center',
                          contain: 'layout style paint',
                          willChange: 'contents'
                        }}
                      >
                        <div style={{ 
                          width: '100%', 
                          height: '40px', 
                          position: 'relative', 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={60}
                          height={60}
                          loading="lazy"
                          style={{
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '60px',
                            maxHeight: '60px',
                            margin: '0 auto',
                            display: 'block'
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
                          height: '120px',
                          boxSizing: 'border-box',
                          justifyContent: 'center',
                          contain: 'layout style paint',
                          willChange: 'contents'
                        }}
                      >
                        <div style={{ 
                          width: '100%', 
                          height: '40px', 
                          position: 'relative', 
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Image
                            src={framework.image}
                            alt={framework.name}
                            width={60}
                            height={60}
                            loading="lazy"
                            style={{
                              width: 'auto',
                              height: 'auto',
                              maxWidth: '60px',
                              maxHeight: '60px',
                              margin: '0 auto',
                              display: 'block'
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
