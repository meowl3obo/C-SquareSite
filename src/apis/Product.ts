import { $service } from "./index"

export const GetClassifiesApi = async () => {
  const response = await $service('GET', '/v1/classify')
  return response
}