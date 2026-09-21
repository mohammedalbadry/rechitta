import { advisors } from '../../utils/advisorsData'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  await new Promise((resolve) => setTimeout(resolve, 500))

  const advisor = advisors.find((a) => a.id === id)
  if (!advisor) {
    throw createError({
      statusCode: 404,
      statusMessage: `Advisor with id ${id} not found`
    })
  }
  return advisor
})