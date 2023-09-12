import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "@/data/slice/cartSlice";
import AddButton from "@/components/AddButton";

const Item = ({ data }) => {
	const count = useSelector((state) => state.cart?.[data.id]);
	const dispatch = useDispatch();

	/* 💡 Event Name start with 'handle...' */
	const handleCardOnClick = (e) => {
		console.log("card clicked");
	};

	const handleOnAdd = (e) => {
		e.stopPropagation();
		dispatch(add({ id: data.id }));
	};

	const handleOnRemove = (e) => {
		e.stopPropagation();
		dispatch(remove({ id: data.id }));
	};

	const cartCount = count || 0;

	return (
		<div
			onClick={handleCardOnClick}
			className="mb-1 p-4 hover:shadow-xl transition-shadow cursor-pointer"
		>
			{/* 💡 UX tips: Add 'select-none' keep screen clean without selected  */}
			<div className="aspect-video overflow-hidden flex items-center relative select-none">
				<img src={data.image} alt="" />

				{/* split ui keep component isolation (no re-render) */}
				<AddButton
					count={cartCount}
					onAdd={handleOnAdd}
					onRemove={handleOnRemove}
				/>
			</div>
			<div className="py-2 text-stone-950">
				<div>{data.title}</div>
				<div className="text-sm opacity-70">${data.price}</div>
			</div>
		</div>
	);
};

export default Item;
