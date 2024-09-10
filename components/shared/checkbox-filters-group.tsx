"use client"

import { cn } from "@/lib/utils"
import { ChangeEvent, FC, useState } from "react"
import { Input } from "../ui"
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox"

type Item = FilterCheckboxProps

interface ICheckboxFiltersGroupProps {
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
	className?: string
}

export const CheckboxFiltersGroup: FC<ICheckboxFiltersGroupProps> = ({
	items,
	title,
	className,
	defaultItems,
	defaultValue,
	limit = 5,
	onChange,
	searchInputPlaceholder = "Поиск... ",
}) => {
	const [showAll, setShowAll] = useState(false)

	const [searchValue, setSearchValue] = useState("")

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.currentTarget.value)
	}

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: defaultItems.slice(0, limit)

	return (
		<div className={cn("", className)}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
						onChange={onChangeSearchInput}
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, i) => {
					return (
						<FilterCheckbox
							key={i}
							text={item.text}
							value={item.value}
							endAdornment={item.endAdornment}
							checked={false}
							onCheckedChange={ids => console.log(ids)}
						/>
					)
				})}
			</div>

			{items.length > limit && (
				<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
					<button
						className="text-primary mt-3"
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			)}
		</div>
	)
}
