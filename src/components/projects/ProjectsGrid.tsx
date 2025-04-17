"use client";

import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { ProjectGridCard } from "./ProjectGridCard";
import styles from "./ProjectsGrid.module.scss";
import dynamic from 'next/dynamic';
import { memo, useMemo } from 'react';

// Dynamic import for ProjectGridCard with memo for better React rendering performance
const MemoizedProjectCard = memo(ProjectGridCard);

const projects = [
  {
    name: 'GreenSync',
    image: '/images/projects/greensync-h.png',
    link: '/projects/greensync',
    description: 'A decentralized AI platform that distributes computation across user devices, reducing reliance on energy-hungry cloud servers. Users earn green coins based on their computational contributions, incentivizing sustainable AI processing.'
  },
  {
    name: 'Movie Recommendation System',
    image: '/images/projects/movie-recommendation.png',
    link: '/projects/movie-recommendation',
    description: 'A web-based recommender system using collaborative filtering techniques with user-based and item-based algorithms for personalized movie recommendations.'
  },
  {
    name: 'Review Tool',
    image: '/images/projects/review-tool2.png',
    link: '/projects/review-tool',
    description: 'A comprehensive code review platform with CLI, API, job processor, and web frontend, using SSH authentication and supporting file diffs, comments, and approvals.'
  },
  {
    name: 'Soccer Prediction Model',
    image: '/images/projects/epl.png',
    link: '/projects/soccer',
    description: 'A machine learning model for predicting soccer match outcomes.'
  },
  {
    name: 'Stock Market Simulator',
    image: '/images/projects/stock-market.png',
    link: '/projects/stocks',
    description: 'Interactive simulation tool for stock market trading strategies.'
  },
  {
    name: 'Digital Planner and Reminders',
    image: '/images/projects/planner.webp',
    link: '/projects/planner',
    description: 'Smart productivity app with advanced reminder features.'
  },
  {
    name: 'Solitaire',
    image: '/images/projects/solitaire.jpeg',
    link: '/projects/solitaire',
    description: 'Classic card game with a modern interface and customizable rules.'
  },
  {
    name: 'Network Analysis Software',
    image: '/images/projects/network.jpg',
    link: '/projects/network',
    description: 'Tool for analyzing and visualizing complex network structures.'
  },
  {
    name: 'Journaling App',
    image: '/images/projects/journal.jpg',
    link: '/projects/journal',
    description: 'AI-powered journaling application with mood analysis.'
  },
  {
    name: 'Music Plagiarism Detector',
    image: '/images/projects/music2.jpg',
    link: '/projects/music',
    description: 'Algorithm that detects similarities between musical compositions.'
  },
  {
    name: 'Hackathon Application Analyzer',
    image: '/images/projects/mlh.jpeg',
    link: '/projects/hackathon',
    description: 'NLP tool to assess and categorize hackathon applications.'
  },
  {
    name: 'Star Trek Shortest Path Finder',
    image: '/images/projects/star-trek.png',
    link: '/projects/star-trek',
    description: 'Graph algorithm visualizer using Star Trek universe as a dataset.'
  },
];

interface ProjectsGridProps {
  title?: string;
  description?: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ 
  title = "My Projects",
  description
}) => {
  // Memoize projects to prevent unnecessary re-renders
  const projectItems = useMemo(() => {
    return projects.map((project, index) => (
      <div key={index} className={styles.gridItem}>
        <MemoizedProjectCard 
          name={project.name}
          image={project.image}
          link={project.link}
          description={project.description}
        />
      </div>
    ));
  }, []);
  
  return (
    <Column fillWidth gap="xl" paddingX="l">
      <Flex 
        direction="column" 
        horizontal="center" 
        gap="l" 
        paddingY="xl"
      >
        <Heading 
          variant="display-strong-xl" 
          className={styles.title}
          // Add properties to optimize LCP
          style={{ 
            contain: 'layout paint style',
            fontSize: '2.5rem',
            textWrap: 'balance'
          }}
        >
          {title}
        </Heading>
        
        {description && (
          <Text 
            variant="display-default-s" 
            onBackground="neutral-weak" 
            className={styles.description}
          >
            {description}
          </Text>
        )}
      </Flex>
      
      <div className={styles.grid}>
        {projectItems}
      </div>
    </Column>
  );
};

// Default export for dynamic import support
export default ProjectsGrid; 