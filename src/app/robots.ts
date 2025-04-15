export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: '/', // Explicitly allow everything first
        disallow: '/contact', // Disallow the contact page
      },
    ],
    // Hardcoded the final domain for the sitemap
    sitemap: `https://www.zaidqourah.com/sitemap.xml`, 
  };
}
