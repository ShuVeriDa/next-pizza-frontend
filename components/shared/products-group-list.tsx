"use client"

import { cn } from "@/lib/utils"
import { useCategoryStore } from "@/store/category"
import { FC, useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { ProductCard } from "./product-card"
import { Title } from "./title"

interface IProductsGroupListProps {
	title: string
	items: any[]
	categoryId: number
	className?: string
	listClassName?: string
}

export const ProductsGroupList: FC<IProductsGroupListProps> = ({
	className,
	categoryId,
	items,
	title,
	listClassName,
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])

	return (
		<div className={cn("", className)} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />

			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{items.map((product, i) => {
					return (
						<ProductCard
							id={product.id}
							key={product.id}
							name={product.name}
							imageUrl={product.imageUrl}
							price={product.items[0].price}
						/>
					)
				})}
			</div>
		</div>
	)
}
