import { projects } from '../../utils/projectsData'

export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return projects
})