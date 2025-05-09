export type MediaType = "image" | "video" | "audio" | "document" | "other"

export interface MediaItem {
  id: string
  name: string
  fileName: string
  type: MediaType
  mimeType: string
  url: string
  thumbnailUrl?: string
  size: number
  width?: number
  height?: number
  duration?: number
  createdAt: string
  updatedAt: string
  alt?: string
  description?: string
  tags?: string[]
}

export interface MediaFolder {
  id: string
  name: string
  slug: string
  parentId: string | null
  createdAt: string
  updatedAt: string
}

export interface MediaFilterOptions {
  search?: string
  type?: MediaType | MediaType[]
  tags?: string[]
  sortBy?: "name" | "createdAt" | "updatedAt" | "size"
  sortDirection?: "asc" | "desc"
  page?: number
  pageSize?: number
  folderId?: string | null
}

export interface MediaListResponse {
  data: MediaItem[]
  totalCount: number
  page: number
  pageSize: number
}
