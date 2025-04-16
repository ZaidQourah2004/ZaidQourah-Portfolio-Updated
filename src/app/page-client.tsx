"use client";

import React from "react";
import { Column } from "@/once-ui/components";
import Link from "next/link";
import { motion } from "motion/react";
import dynamic from 'next/dynamic';

// Use dynamic import with SSR disabled to prevent the component from running during server rendering
const Vortex = dynamic(() => import('@/components/ui/vortex').then(mod => ({ default: mod.Vortex })), 
  { ssr: false }
);

type Person = {
  firstName: string;
  lastName: string;
  role: string;
  avatar?: string;
  location?: string;
  citizenship?: string;
  citizenshipIcon?: string;
  languages?: string[];
};

export default function ClientPage({
  person = {
    firstName: "Zaid",
    lastName: "Qourah",
    role: "Software Developer & AI Enthusiast"
  }
}: {
  person?: Person;
}) {

  return (
    <Column fillWidth>
      {/* Hero Section with Vortex Background */}
      <section className="w-full">
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
          {/* Single optimized vortex with reduced particles */}
          <div className="absolute inset-0 w-full h-full">
            <Vortex 
              backgroundColor="transparent"
              particleCount={100} // Reduced from 200
              baseHue={220}
              rangeY={150}
              baseSpeed={0.08} // Slightly reduced
              rangeSpeed={0.6} // Reduced from 0.8
              baseRadius={1.8} // Increased from 1.5 for better visibility with fewer particles
              rangeRadius={2.5}
              containerClassName="absolute inset-0"
            />
          </div>
          
          <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4 py-12 md:px-8">
            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                {person.firstName} {person.lastName}
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
                {person.role}
              </p>
            </motion.div>

            {/* Code Block Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-3xl mb-8 shadow-xl"
            >
            </motion.div>

            {/* Terminal-Style Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                width: "100%",
                maxWidth: "100%",
                borderRadius: "0.5rem",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                border: "1px solid #334155",
                background: "linear-gradient(145deg, #262b38, #1a1d29)",
                position: "relative"
              }}
            >
              {/* Glowing effect */}
              <div style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                right: "-10px",
                bottom: "-10px",
                background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)",
                filter: "blur(20px)",
                zIndex: -1
              }}></div>
              
              {/* Terminal Window Top Bar */}
              <div style={{
                backgroundColor: "#2a2d3e",
                padding: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderBottom: "1px solid #334155"
              }}>
                <div style={{ 
                  width: "0.75rem", 
                  height: "0.75rem", 
                  backgroundColor: "#ef4444", 
                  borderRadius: "9999px",
                  boxShadow: "0 0 5px rgba(239, 68, 68, 0.7)"
                }}></div>
                <div style={{ 
                  width: "0.75rem", 
                  height: "0.75rem", 
                  backgroundColor: "#eab308", 
                  borderRadius: "9999px",
                  boxShadow: "0 0 5px rgba(234, 179, 8, 0.7)" 
                }}></div>
                <div style={{ 
                  width: "0.75rem", 
                  height: "0.75rem", 
                  backgroundColor: "#22c55e", 
                  borderRadius: "9999px",
                  boxShadow: "0 0 5px rgba(34, 197, 94, 0.7)"
                }}></div>
                <div style={{ 
                  fontSize: "0.75rem", 
                  color: "#94a3b8", 
                  marginLeft: "0.5rem",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em"
                }}>zaidqourah@terminal ~ </div>
                <div style={{
                  marginLeft: "auto",
                  fontSize: "0.7rem",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  padding: "0.1rem 0.4rem",
                  background: "#1c1f2e",
                  borderRadius: "0.2rem",
                  border: "1px solid #475569"
                }}>npm v9.8.1</div>
              </div>
              
              {/* Terminal Window Content */}
              <div style={{ 
                backgroundColor: "#1E2130", 
                padding: "1.5rem",
                paddingBottom: "2rem",
                backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                minHeight: "350px"
              }}>
                <div style={{ 
                  backgroundColor: "rgba(39, 44, 53, 0.95)", 
                  padding: "1.5rem",
                  borderRadius: "0.375rem", 
                  boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(74, 85, 104, 0.3)",
                  height: "100%"
                }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "0.8rem", 
                    paddingBottom: "0.8rem",
                    borderBottom: "1px dashed rgba(74, 85, 104, 0.3)"
                  }}>
                    <div style={{ 
                      width: "1.75rem", 
                      height: "1.75rem", 
                      borderRadius: "50%", 
                      backgroundColor: "#1E293B", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      marginRight: "0.75rem",
                      border: "1px solid #475569"
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ 
                        color: "#4ade80", 
                        fontSize: "0.875rem", 
                        fontFamily: "monospace",
                        margin: 0
                      }}>
                        <span style={{ color: "#60a5fa" }}>zaidqourah@zaids-macbook</span>:<span style={{ color: "#c084fc" }}>~</span>$ node portfolio.js
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    marginBottom: "0.75rem", 
                    color: "#facc15", 
                    fontSize: "0.875rem", 
                    fontFamily: "monospace",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <span style={{
                      display: "inline-block",
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "#22c55e",
                      borderRadius: "50%",
                      marginRight: "0.5rem"
                    }}></span>
                    &gt; Select a navigation option:
                  </p>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Link href="/about" style={{ marginBottom: "0.5rem", textDecoration: "none" }}>
                      <button style={{ 
                        backgroundColor: "#2a2d3e", 
                        color: "#34d399", 
                        padding: "0.5rem 1rem", 
                        borderRadius: "0.375rem", 
                        border: "1px solid #475569",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#3a3d4e";
                        e.currentTarget.style.boxShadow = "0 0 10px rgba(52, 211, 153, 0.3)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#2a2d3e";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      >
                        <span style={{ 
                          color: "#94a3b8", 
                          marginRight: "0.5rem",
                          fontWeight: "bold"
                        }}>$</span> navigate('/about')
                      </button>
                    </Link>
                    
                    <Link href="/projects" style={{ marginBottom: "0.5rem", textDecoration: "none" }}>
                      <button style={{ 
                        backgroundColor: "#2a2d3e", 
                        color: "#34d399", 
                        padding: "0.5rem 1rem", 
                        borderRadius: "0.375rem", 
                        border: "1px solid #475569",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#3a3d4e";
                        e.currentTarget.style.boxShadow = "0 0 10px rgba(52, 211, 153, 0.3)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#2a2d3e";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      >
                        <span style={{ 
                          color: "#94a3b8", 
                          marginRight: "0.5rem",
                          fontWeight: "bold"
                        }}>$</span> navigate('/projects')
                      </button>
                    </Link>
                    
                    <Link href="/contact" style={{ marginBottom: "0.5rem", textDecoration: "none" }}>
                      <button style={{ 
                        backgroundColor: "#2a2d3e", 
                        color: "#34d399", 
                        padding: "0.5rem 1rem", 
                        borderRadius: "0.375rem", 
                        border: "1px solid #475569",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#3a3d4e";
                        e.currentTarget.style.boxShadow = "0 0 10px rgba(52, 211, 153, 0.3)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#2a2d3e";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      >
                        <span style={{ 
                          color: "#94a3b8", 
                          marginRight: "0.5rem",
                          fontWeight: "bold"
                        }}>$</span> navigate('/contact')
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Column>
  );
}
