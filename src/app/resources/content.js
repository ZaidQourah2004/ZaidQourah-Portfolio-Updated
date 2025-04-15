import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Zaid",
  lastName: "Qourah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Science Engineering Student",
  avatar: "/images/ZQ1.png",
  location: "",
  citizenship: "US Citizen",
  citizenshipIcon: "🇺🇸",
  languages: ["English", "Arabic"],
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ZaidQourah2004",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/zaid-qourah/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:qourahzaid04@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Computer Science Engineer & AI Enthusiast</>,
  subline: (
    <>
      I'm Zaid, a Computer Science Engineering student at <InlineCode>Michigan State University</InlineCode>, with a passion 
      <br /> for AI, Machine Learning, and software development.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a dynamic and forward-thinking Computer Science Engineering student with a minor in Economics at 
        Michigan State University. I'm passionate about technology and innovation, particularly in the realms of 
        AI and Machine Learning. My goal is to leverage technology to create meaningful solutions that benefit society.
      </>
    ),
  },
  projects: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Quality Logistics Ltd Co.",
        timeframe: "May 2024 - Aug 2024",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Led full-stack development of company website utilizing ReactJS, Node.js, and MongoDB
          </>,
          <>
            Configured HTTPS, managed DNS, and implemented security protocols to improve data security
          </>,
          <>
            Optimized website performance through lazy loading and code splitting resulting in 50% reduced load times
          </>,
          <>
            Applied SEO best practices to improve search engine rankings resulting in 300% increase in monthly visitors
          </>,
        ],
        images: [],
      },
      {
        company: "MSU AI Club",
        timeframe: "Sep 2023 - Apr 2024",
        role: "Project Team Lead",
        achievements: [
          <>
            Led a group of 10 members in building an AI-powered nutrition recommendation web-app
          </>,
          <>
            Designated member roles, tracked progress, and measured team success
          </>,
          <>
            Programmed LLM using datasets from Kaggle and implemented GPT API to create an AI assistant capable of answering nutrition-related questions
          </>,
          <>
            Deployed project hosting over 1000 concurrent users with a 95% positive feedback rate and 80% retention rate
          </>,
        ],
        images: [],
      },
      {
        company: "Software Engineering & Computing Society",
        timeframe: "Dec 2023 - Present",
        role: "Co-Founder",
        achievements: [
          <>
            Mentoring over 200 students on how to navigate the field of Software Engineering
          </>,
          <>
            Hosting networking events, workshops, and coding competitions to promote best coding practices
          </>,
          <>
            Creating a scalable cloud service for campus projects and clubs
          </>,
          <>
            Collaborating with non-profits by refining their frontend designs, backend systems, and database management
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Michigan State University",
        description: <>Bachelor of Science, Computer Science Engineering, Minor in Economics | GPA: 3.98 | Expected Graduation: Fall 2025</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Python, C++, Java, Assembly, JavaScript, TypeScript, SQL, NoSQL, Git, HTML, CSS, Go</>,
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: <>Django, Flask, Next.js, .NET, Tailwind, Spring Boot, React, Pandas, Tkinter, PyQt5, NumPy, Scikit-Learn, Svelte, gRPC</>,
        images: [],
      },
      {
        title: "Professional Focus",
        description: (
          <>
            <strong>Software Engineering:</strong> Designing and creating responsive and user-friendly software solutions.<br />
            <strong>AI & Machine Learning:</strong> Implementing ML algorithms using Python, TensorFlow, and Scikit-Learn.<br />
            <strong>Backend Development:</strong> Dynamic data manipulation and real-time database management.<br />
            <strong>Frontend Development:</strong> Developing interactive and responsive user interfaces.
          </>
        ),
        images: [],
      },
    ],
  },
};

const projects = {
  label: "Projects",
  title: "Projects",
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /projects routes
};

const contact = {
  label: "Contact",
  title: "Get in Touch",
  description: `Contact me for collaborations and inquiries`,
  formKey: "88ed3fd5-bb53-4f67-8726-738374a125a9",
  email: "qourahzaid04@gmail.com",
};

export { person, social, home, about, projects, contact };
