import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, projects } from "@/app/resources/content";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

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
      <ProjectsGrid 
        title={projects.title} 
        description={projects.description}
      />
    </Column>
  );
}
