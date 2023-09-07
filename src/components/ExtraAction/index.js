import { PlusIcon } from "@radix-ui/react-icons";

const ExtraAction = () => {
	return (
		<div className="px-12 flex gap-4">
			<div className="bg-orange-50 text-amber-800 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:bg-orange-100 transition-opacity flex items-center gap-1">
				查看精選推薦商品
			</div>
			<div className="bg-orange-50 text-amber-800 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:bg-orange-100 transition-opacity flex items-center gap-1">
				<PlusIcon className="w-4 h-4" />
				團購訂單
			</div>
		</div>
	);
};

export default ExtraAction;
