const MenuCategory = () => {
	const breakfastItems = [
		"經典系列",
		"夏日限定",
		"冬日限定",
		"水果系列",
		"巧克力系列",
		"gelato怎麼吃",
		"飲料",
	];
	return (
		<div className="max-h-screen overflow-auto no-scrollbar">
			<div className="pb-20 pt-">
				<div className="mb-1 underline font-bold text-stone-950">外帶選單</div>
				{breakfastItems.map((item, index) => {
					return (
						<div
							key={index}
							className="text-gray-850 py-2 cursor-pointer text-slate-500 hover:text-slate-900 transition-opacity">
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MenuCategory;
