import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, projects } from "@/app/resources/content";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Head from 'next/head';

// Dynamically import the ProjectsGrid component
const ProjectsGrid = dynamic(() => import('@/components/projects/ProjectsGrid').then(mod => ({ default: mod.ProjectsGrid })), {
  ssr: true,
  loading: () => (
    <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0',
        fontFamily: 'var(--font-display)',
        contain: 'layout paint style'
      }}>
        {projects.title}
      </h1>
    </div>
  )
});

export async function generateMetadata() {
  const title = projects.title;
  const description = projects.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/`,
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

export default function Projects() {
  return (
    <>
      <Head>
        {/* Add preload for critical resources */}
        <link rel="preload" href="/fonts/your-main-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>
      <Column maxWidth="xl">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              headline: projects.title,
              description: projects.description,
              url: `https://${baseURL}/projects`,
              author: {
                "@type": "Person",
                name: person.name,
              }
            }),
          }}
        />
        
        {/* Add critical CSS for LCP */}
        <style dangerouslySetInnerHTML={{ __html: `
          h1 {
            font-family: var(--font-display);
            font-weight: bold;
            font-size: 2.5rem;
            text-align: center;
            contain: layout paint style;
          }
        `}} />
        
        <Suspense fallback={
          <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0',
              fontFamily: 'var(--font-display)',
            }}>
              {projects.title}
            </h1>
          </div>
        }>
          <ProjectsGrid 
            title={projects.title} 
            description={projects.description}
          />
        </Suspense>
      </Column>
    </>
  );
}
