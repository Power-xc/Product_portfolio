import type { MetadataRoute } from "next"
import { selectedQuestions } from "@/lib/home-content"

const siteUrl = "https://product-portfolio-v0-2.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/sitemap"]
  const caseRoutes = selectedQuestions.map((caseStudy) => caseStudy.href)

  return [...staticRoutes, ...caseRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
