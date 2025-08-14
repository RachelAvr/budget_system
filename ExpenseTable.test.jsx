import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ExpenseTable from "./ExpenseTable";

describe("test for...", ()=>{
    test("is total acurate?", async () => {
        const data = jest.fn();
        render(<ExpenseTable/>)
        await userEvent.selectOptions(screen.getByRole("combobox"), "Rent");
        await userEvent.type(screen.getByPlaceholderText(/planned cost/i), "1000");
        await userEvent.type(screen.getByPlaceholderText(/actual cost/i), "900");
        await userEvent.click(screen.getByRole("button", { name: /add/i }));

        expect(screen.getByText(/total: 900/i)).toBeInTheDocument();
    })
}
)