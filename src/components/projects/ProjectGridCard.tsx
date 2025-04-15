"use client";

import { Column, Flex, Heading, Text, SmartLink } from "@/once-ui/components";
import Image from 'next/image';
import styles from './ProjectGridCard.module.scss';

interface ProjectGridCardProps {
  name: string;
  image: string;
  link: string;
  description?: string;
}

export const ProjectGridCard: React.FC<ProjectGridCardProps> = ({
  name,
  image,
  link,
  description,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
          priority
          quality={95}
        />
        <div className={styles.overlay}>
          <Flex 
            direction="column" 
            gap="8" 
            horizontal="center" 
            vertical="center"
            className={styles.content}
          >
            <Heading 
              variant="display-strong-s" 
              className={styles.title}
              style={{ textAlign: 'center' }}
            >
              {name}
            </Heading>
            
            {description && (
              <Text 
                variant="body-default-s" 
                className={styles.description}
                style={{ textAlign: 'center' }}
              >
                {description}
              </Text>
            )}
            
            <SmartLink 
              href={link} 
              suffixIcon="arrowRight" 
              className={styles.link}
            >
              <Text 
                variant="label-strong-s" 
                style={{ 
                  color: 'white',
                  whiteSpace: 'nowrap'
                }}
              >
                View Project
              </Text>
            </SmartLink>
          </Flex>
        </div>
      </div>
    </div>
  );
}; 