import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/app/globals.css";
import "@/once-ui/components/Background.module.scss";

import classNames from "classnames";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from "@/app/resources";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { person, home } from "@/app/resources/content";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";
import Script from 'next/script';
import { Suspense } from "react";

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: home.title,
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: "Portfolio website showcasing my work.",
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif']
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  preload: true
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable,
      )}
    >
      <ToastProvider>
        <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
          <Background
            mask={{
              cursor: effects.mask.cursor,
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
            }}
            gradient={{
              display: false,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
              opacity: effects.gradient.opacity as
                | 0
                | 10
                | 20
                | 30
                | 40
                | 50
                | 60
                | 70
                | 80
                | 90
                | 100,
            }}
            dots={{
              display: effects.dots.display,
              color: effects.dots.color,
              size: effects.dots.size as any,
              opacity: effects.dots.opacity as any,
            }}
            grid={{
              display: effects.grid.display,
              color: effects.grid.color,
              width: effects.grid.width as any,
              height: effects.grid.height as any,
              opacity: effects.grid.opacity as any,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as any,
            }}
          />
          <Flex fillWidth minHeight="16"></Flex>
          <Header />
          <Flex
            position="relative"
            zIndex={0}
            fillWidth
            paddingY="l"
            paddingX="l"
            horizontal="center"
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <Suspense fallback={<div>Loading...</div>}>
                <RouteGuard>{children}</RouteGuard>
              </Suspense>
            </Flex>
          </Flex>
          <Footer />
          <Analytics />
          <SpeedInsights />
          
          {/* Preload critical resources */}
          <Script 
            id="preload-fonts"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                // Preload important resources
                const preloadLinks = [
                  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
                  { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }
                ];
                
                preloadLinks.forEach(attrs => {
                  const link = document.createElement('link');
                  Object.keys(attrs).forEach(key => {
                    link.setAttribute(key, attrs[key]);
                  });
                  document.head.appendChild(link);
                });
              `
            }}
          />

          {/* Optimize JavaScript loading */}
          <Script
            id="javascript-optimization"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                // Defer non-critical JavaScript
                function loadScript(src, async = true, defer = true) {
                  const script = document.createElement('script');
                  script.src = src;
                  script.async = async;
                  script.defer = defer;
                  document.body.appendChild(script);
                }
                
                // Add any third-party scripts that aren't critical
                // for example: analytics, tracking, etc.
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    // Example: add any non-critical scripts here
                    // loadScript('/path/to/non-critical.js');
                  }, 1000);
                });
              `
            }}
          />
        </Column>
      </ToastProvider>
    </Flex>
  );
}
