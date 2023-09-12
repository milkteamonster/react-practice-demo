import { render, fireEvent } from "@testing-library/react";
import AddButton from "@/components/AddButton";

describe("AddButton", () => {
	it("renders a AddButton", () => {
		const { getByTestId } = render(<AddButton />);

		const countNumber = getByTestId("add-btn");

		expect(countNumber).toBeInTheDocument();
	});

	it("add item to cart", () => {
		const fn = jest.fn();

		const { getByTestId } = render(<AddButton onAdd={fn} />);

		const addBtn = getByTestId("add-btn");

		fireEvent.click(addBtn);

		expect(fn).toHaveBeenCalledTimes(1);
	});

	it("remove item to cart", () => {
		const fn = jest.fn();

		const { getByTestId } = render(<AddButton onRemove={fn} count={2} />);

		const removeBtn = getByTestId("remove-btn");
		const count = getByTestId("count");

		fireEvent.click(removeBtn);

		expect(count.textContent).toBe("2");
		expect(fn).toHaveBeenCalledTimes(1);
	});
});
