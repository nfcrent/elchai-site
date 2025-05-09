"use server"

import { revalidatePath } from "next/cache"
import { slugify } from "@/utils/format"
import type { ContentBlock, Page, Section } from "@/types/page"
import type { ResponsePaginated } from "@/types/api"
import { API } from "@/utils/api"


export async function getPages() {
  const res = await API.get<Page, ResponsePaginated<Page> & {
    meta: {
      publishedCount?: number
    }
  }>('/pages')
  return res
}

export async function getPageById(id: string) {
  const res = await API.get<Page>(`/pages/${id}`)
  return res
}

export async function createPage(formData: FormData) {
  const title = formData.get("title") as string
  const slug = slugify(formData.get("slug") as string)
  const path = formData.get("path") as string
  const status = formData.get("status") as string
  const seoTitle = formData.get("seoTitle") as string
  const seoDescription = formData.get("seoDescription") as string
  const seoKeywords = (formData.get("seoKeywords") as string).split(",").map((keyword) => keyword.trim())

  const pageData = {
    title,
    slug,
    path,
    status,
    seo: {
      title: seoTitle,
      description: seoDescription,
      keywords: seoKeywords,
    },
    sections: [],
  }

  const res = await API.post<Page>('/pages', pageData)
  revalidatePath("/admin/pages")
  console.log(res)
  return res
}


export async function deletePage(id: string) {
  const res = await API.delete<boolean>(`/pages/${id}`)
  revalidatePath(`admin/pages/${id}`)
  return res
}

export async function updatePage(id: string, formData: FormData) {
  const title = formData.get("title") as string
  const slug = slugify(formData.get("slug") as string)
  const path = formData.get("path") as string
  const status = formData.get("status") as string
  const seoTitle = formData.get("seoTitle") as string
  const seoDescription = formData.get("seoDescription") as string
  const seoKeywords = (formData.get("seoKeywords") as string).split(",").map((keyword) => keyword.trim())

  const pageData = {
    title,
    slug,
    path,
    status,
    seo: {
      title: seoTitle,
      description: seoDescription,
      keywords: seoKeywords,
    },
  }
  const res = await API.patch<Page>(`/pages/${id}`, pageData)
  return res
}

export async function addSection(pageId: string, formData: FormData) {
  const name = formData.get("name") as string
  const slug = slugify((formData.get("slug") as string) || name)
  const sectionData: Omit<Section, "id"> = {
    name,
    slug,
    pageId,
    blocks: {},
  }
  const res = await API.post(`/pages/${pageId}/sections`, sectionData)
  revalidatePath(`/admin/pages/${pageId}`)
  return res
}
export async function getSectionById(pageId: string, sectionId: string) {
  const res = await API.get<Section>(`/pages/${pageId}/sections/${sectionId}`)
  return res
}

export async function getPageSections(pageId: string) {
  const res = await API.get<Section[]>(`/pages/${pageId}`)
  return res
}

export async function deleteSection(pageId: string, sectionId: string) {
  const res = await API.delete<boolean>(`/pages/${pageId}/sections/${sectionId}`)
  revalidatePath(`/admin/pages/${pageId}`)
  return res
}

export async function addBlock({ pageId, sectionId, key, blockData }: { pageId: string, sectionId: string, key: string, blockData: ContentBlock }) {
  const res = await API.post<ContentBlock>(`/pages/${pageId}/sections/${sectionId}/blocks`, { key, block: blockData })
  console.log(blockData)
  revalidatePath(`/admin/pages/${pageId}`)
  revalidatePath(`/admin/pages/${pageId}/sections/${sectionId}`)
  return res
}

export async function updateBlock(
  pageId: string,
  sectionId: string,
  blockKey: string,
  blockData: Partial<ContentBlock>,
) {
  const res = await API.patch<ContentBlock>(
    `/pages/${pageId}/sections/${sectionId}/blocks/${blockKey}`,
    blockData
  )

  revalidatePath(`/admin/pages/${pageId}`)
  revalidatePath(`/admin/pages/${pageId}/sections/${sectionId}`)

  return res
}

export async function deleteBlock(pageId: string, sectionId: string, blockKey: string) {
  const res = await API.delete<boolean>(
    `/pages/${pageId}/sections/${sectionId}/blocks/${blockKey}`)
  revalidatePath(`/admin/pages/${pageId}`)
  revalidatePath(`/admin/pages/${pageId}/sections/${sectionId}`)

  return res
}

export async function reorderBlocks(pageId: string, sectionId: string, blockIds: string[]) {
  const res = await API.patch<ContentBlock[]>(
    `/pages/${pageId}/sections/${sectionId}/blocks/reorder`,
    { blockIds }
  )

  revalidatePath(`/admin/pages/${pageId}`)
  revalidatePath(`/admin/pages/${pageId}/sections/${sectionId}`)

  return res
}