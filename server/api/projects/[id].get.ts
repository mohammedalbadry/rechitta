import { projects } from '../../utils/projectsData'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  await new Promise((resolve) => setTimeout(resolve, 600))

  const project = projects.find((p) => p.id === id)
  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project with id ${id} not found`
    })
  }
  return project
})