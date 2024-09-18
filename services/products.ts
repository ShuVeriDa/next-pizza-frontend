import { Product } from "@prisma/client"
import { ApiRoutes } from "./contsants"
import { axiosInstance } from "./instance"

export const search = async (query: string): Promise<Product[]> => {
	return (
		await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
			params: {
				query,
			},
		})
	).data
}
