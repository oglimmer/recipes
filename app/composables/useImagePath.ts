export const useImagePath = (path: string) => {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL

  // Remove leading slash from path if present, and ensure baseURL ends properly
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const cleanBase = baseURL.endsWith('/') ? baseURL : baseURL + '/'

  return cleanBase + cleanPath
}
