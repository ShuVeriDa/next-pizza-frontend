import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from "@/components/shared"

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />

			<Container className="pb-14 mt-10">
				<div className="flex gap-[80px]">
					{/* filters */}
					<div className="w-[250px]">
						<Filters />
					</div>

					{/* product list */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Пиццы"
								items={[
									{
										id: 1,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 2,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 3,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 4,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 5,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
								]}
								categoryId={1}
							/>

							<ProductsGroupList
								title="Комбо"
								items={[
									{
										id: 11,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 12,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 13,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 14,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
									{
										id: 15,
										name: "Пепперони",
										price: 550,
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D610A62D78598406363A9A8AD65.avif",
										items: [
											{
												price: 550,
											},
										],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
