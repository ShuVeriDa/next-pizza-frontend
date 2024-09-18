import { cn } from "@/lib/utils"
import { NextPage } from "next"

interface IProductProps {
	className?: string
	params: { id: string }
}

const Product: NextPage<IProductProps> = ({ className, params }) => {
	return <div className={cn("", className)}></div>
}
export default Product
