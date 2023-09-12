import { useSelector } from "react-redux";
import map from "lodash/map";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchBar from "@/components/SearchBar";
import Cart from "@/components/Cart";

const Navigation = () => {
	const cart = useSelector((state) => state.cart);
	const count = map(cart).reduce((acc, cur) => acc + cur, 0);

	return (
		<div className="bg-blue-100 flex items-center min-h-[96px] px-10 w-full fixed top-0 z-10">
			<div className="flex items-center">
				<HamburgerMenuIcon className="w-5 h-5 mr-8" />
				<div className="text-[28px] grotesk font-semibold">
					Always<span className="ml-2 grotesk font-semibold">Gelato</span>
				</div>
			</div>

			<div className="flex justify-between flex-1 items-center pl-20 pr-2">
				<SearchBar />
				<Cart />
			</div>
		</div>
	);
};

export default Navigation;

