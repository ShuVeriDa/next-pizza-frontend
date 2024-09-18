import { Api } from "@/services/api-clients"
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"

interface IReturnProps {
	ingredients: Ingredient[]
}

export const useFilterIngredients = (): IReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])

	useEffect(() => {
		const fetchIngredients = async () => {
			try {
				const data = await Api.ingredients.getAll()
				setIngredients(data)
			} catch (error) {
				console.log(error)
			}
		}

		fetchIngredients()
	}, [])

	return { ingredients }
}
