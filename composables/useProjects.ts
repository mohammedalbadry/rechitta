export interface Project {
  id: number
  image: string
  tagTop: string
  name: string
  location: string
}

export function useProjects() {
  return useFetch<Project[]>('/api/projects')
}