import store from "@/store"
import { GetClassifiesApi } from "@/apis/Product"

export const GetClassifies = async () => {
  const classifiesRes = await GetClassifiesApi()
  if (classifiesRes.status == 200) {
    const { data } = classifiesRes
    store.dispatch("Product/SetClassify", data)
  }
}