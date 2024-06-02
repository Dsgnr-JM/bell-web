import type { MarkdownLayoutProps } from "astro"

export type Tag = "astro" | "javascript" | "react" | "nextjs" | "bloguear" | "aprender en público" | "html" | "css" | "react" | "tailwindcss" | "php" | "python" | "frontend" | "backend"

export type TagComponent = {
  title: string,
}

export type FrontMatter = MarkdownLayoutProps<{
  title: string,
  pubDate: number,
  author: string,
  as:string
  description: string,
  tags: Tag[]
}>

export type FrontMatterGlob = {
  frontmatter: {
    title: string,
    as: string
    pubDate: number,
    author: string,
    image: {
      url: string,
      alt: string
    },
    description: string,
    tags: Tag[]
  },
  url: string
}