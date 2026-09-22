export interface Unit {
  id: number
  unitCode: string
  details: string
  price: string
}

export interface Project {
  id: number
  image: string
  tagTop: string
  name: string
  location: string
  investmentFrom: string
  handover: string
  handoverProgress: string
  marketAppreciation: string
  marketAppreciationMeta: string
  rentalRoi: string
  rentalRoiMeta: string
  accentColor: string // TODO: dynamic
  accentOpacity: number // TODO: dynamic
  units: Unit[]
}

export function useProjects() {
  return useFetch<Project[]>('/api/projects')
}

export function useProject(id: number | string) {
  return useFetch<Project>(`/api/projects/${id}`)
}