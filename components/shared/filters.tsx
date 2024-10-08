"use client"

import { FC } from "react"

import { FilterCheckbox, Title } from "@/components/shared/index"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import { Input, RangeSlider } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"

interface IFiltersProps {}

export const Filters: FC<IFiltersProps> = () => {
	const { ingredients } = useFilterIngredients()
	const items = ingredients.map(ingredient => ({
		value: String(ingredient.id),
		text: ingredient.name,
	}))

	return (
		<div className="">
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

			{/* Верхние чекбоксы */}
			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="2" />
			</div>

			{/* Фильтр цен */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input type="number" placeholder="1000" min={100} max={1000} />
				</div>

				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			{/* Фильтр ингредиентов */}
			<CheckboxFiltersGroup
				title="Ингредиенты"
				className="mt-5"
				limit={6}
				items={items.slice(0, 6)}
				defaultItems={items}
			/>
		</div>
	)
}
