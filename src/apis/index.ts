import axios, { Method, AxiosResponse } from "axios"
import { allowedMethods, timeoutSec, headers, apiUrl, formDataHeaders } from "@/config/global/Http";
import { IPayload } from "@/types/Http"

const service = axios.create({
  baseURL: apiUrl,
  timeout: timeoutSec * 1000,
  headers: headers
})

export const $service = async (method: Method, url: string, payload: IPayload = {}) => {
  if (!allowedMethods.includes(method)) throw new Error(`Not allowedMethods: ${method}`)
  try {
    const response = await service.request({
      method,
      url,
      data: payload.body ?? null,
      params: payload.params ?? null
    })
    return response
  } catch (err) {
    throw err
  }
}