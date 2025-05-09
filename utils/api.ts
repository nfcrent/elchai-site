import { config } from "@/config/env"
import { ErrorResponse, ResponseDefault } from "@/types/api"

async function run<D = unknown, T = ResponseDefault<D>>(path: string, options?: RequestInit): Promise<| T | ErrorResponse> {
    try {
        const baseUrl: string = config.apiBaseUrl || "/"
        const url = new URL(`/api/v1${path}`, baseUrl)
        const res = await fetch(url, {
            method: "GET",
            ...options,
            headers: {
                ...options?.headers ?? {},
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log("API error new", error)
        return {
            success: false,
            message: "An error occurred",
            status: 500,
            error: {
                type: "UnknownError",
                detail: "Unknown error occurred",
                timestamp: new Date().toISOString(),
            }
        } as ErrorResponse
    }
}

export const API = {
    post: <D = unknown, T = ResponseDefault<D>>(path: string, body?: string | object, options: RequestInit = {}) => run<D, T>(path, {
        body: typeof body === 'string' ? body : (body ? JSON.stringify(body) : undefined),
        method: 'POST',
        ...options
    }),
    patch: <D = unknown, T = ResponseDefault<D>>(path: string, body?: string | object, options: RequestInit = {}) => run<D, T>(path, {
        body: typeof body === 'string' ? body : (body ? JSON.stringify(body) : undefined),
        method: "PATCH",
        ...options
    }),
    get: <D = unknown, T = ResponseDefault<D>>(path: string) => run<D, T>(path),
    delete: <D = unknown, T = ResponseDefault<D>>(path: string, options: RequestInit = {}) => run<D, T>(path, {
        method: "DELETE",
        ...options
    })
}