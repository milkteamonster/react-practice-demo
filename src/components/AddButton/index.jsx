import { TrashIcon, PlusIcon } from "@radix-ui/react-icons";
import cx from "classnames";

const AddButton = ({ count, onAdd, onRemove }) => {
	const isAdded = count > 0;

	return (
		<div
			className={cx(
				"absolute top-2 right-2 w-8 h-8 bg-black hover:opacity-75",
				"text-white flex items-center justify-center rounded-full transition-all",
				{ "w-auto  justify-between px-2": isAdded }
			)}
		>
			{isAdded && (
				<>
					<TrashIcon onClick={onRemove} data-testid="remove-btn" />
					<div className="text-sm px-2" data-testid="count">
						{count}
					</div>
				</>
			)}
			<PlusIcon onClick={onAdd} data-testid="add-btn" />
		</div>
	);
};

export default AddButton;
