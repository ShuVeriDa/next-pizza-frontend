import { Ingredient } from "@prisma/client"
import { ApiRoutes } from "./contsants"
import { axiosInstance } from "./instance"

export const getAll = async (): Promise<Ingredient[]> => {
	return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
