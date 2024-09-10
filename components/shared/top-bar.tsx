import { Categories, Container, SortPopup } from "@/components/shared"
import { cn } from "@/lib/utils"
import { FC } from "react"

interface ITopBarProps {
	className?: string
}

export const TopBar: FC<ITopBarProps> = ({ className }) => {
	return (
		<div
			className={cn(
				"sticky top-0 bg-white shadow-lg shadow-black/5 z-10",
				className
			)}
		>
			<Container className="flex items-center justify-between ">
				<Categories />
				<SortPopup />
			</Container>
		</div>
	)
}
