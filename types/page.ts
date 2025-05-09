export type ImageAsset = {
  id: string
  url: string
  alt: string
  width: number
  height: number
  caption?: string
}

export type LinkData = {
  id: string
  text: string
  url: string
  isExternal: boolean
  ariaLabel?: string
}

export type SEOData = {
  title: string
  description: string
  keywords: string[]
  ogImage?: ImageAsset
  canonicalUrl?: string
  noIndex?: boolean
  structuredData?: Record<string, any>
}

export type TextBlockData = {
  id: string
  type: "text"
  content: string
}

export type HeadingBlockData = {
  id: string
  type: "heading"
  content: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export type ImageBlockData = {
  id: string
  type: "image"
  image: ImageAsset
}

export type GalleryBlockData = {
  id: string
  type: "gallery"
  images: ImageAsset[]
}

export type VideoBlockData = {
  id: string
  type: "video"
  url: string
  thumbnailImage?: ImageAsset
  isEmbedded?: boolean
}

export type CTABlockData = {
  id: string
  type: "cta"
  heading?: string
  text: string
  links: LinkData[]
}

export type TestimonialBlockData = {
  id: string
  type: "testimonial"
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: ImageAsset
}

export type FeatureItem = {
  id: string
  title: string
  description: string
  icon?: string
  image?: ImageAsset
}

export type FeaturesBlockData = {
  id: string
  type: "features"
  heading?: string
  description?: string
  items: FeatureItem[]
}

export type FormBlockData = {
  id: string
  type: "form"
  formId: string
  heading?: string
  description?: string
}

export type CustomBlockData = {
  id: string
  type: "custom"
  componentKey: string
  data: Record<string, any>
}

export type ContentBlock =
  | TextBlockData
  | HeadingBlockData
  | ImageBlockData
  | GalleryBlockData
  | VideoBlockData
  | CTABlockData
  | TestimonialBlockData
  | FeaturesBlockData
  | FormBlockData
  | CustomBlockData

export type Section = {
  id: string
  name: string
  slug: string
  blocks: Record<string, ContentBlock>
  pageId: string
}

export type PageStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED"

export type Page = {
  id: string
  title: string
  slug: string
  path: string
  seo: SEOData
  sections?: Section[]
  template?: string
  publishedAt?: string
  status: PageStatus
  metadata?: Record<string, any>
  createdAt: string
  updatedAt: string
}
