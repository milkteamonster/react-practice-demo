import MenuCategory from "@/components/MenuCategory";
import CategoryItems from "@/components/CategoryItems";

const ShopMenu = () => {
	return (
		<div className="flex items-start relative min-h-screen px-14 pt-8">
			<div className="w-[320px] pr-5 sticky top-0 left-0">
				<MenuCategory />
			</div>
			<div className="flex-1">
				<CategoryItems />
			</div>
		</div>
	);
};

export default ShopMenu;
