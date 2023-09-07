import { BackpackIcon } from "@radix-ui/react-icons";

const Cart = () => {
	return (
		<div>
			<div className="bg-orange-50 hover:bg-orange-100 text-amber-800 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-3">
				<BackpackIcon className="w-4 h-4 text-amber-800" />
				購物車 •<div>0</div>
			</div>
		</div>
	);
};

export default Cart;
