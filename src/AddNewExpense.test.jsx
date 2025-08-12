import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddNewExpense from "./AddNewExpense";

describe("test for AddNewExpense" , ()=>{
    test("corect value & clear input after onAdd",  async () => {
      
        const onAdd = jest.fn();
        // call the component with the fake info
        render(<AddNewExpense onAdd={onAdd} />);

  
        // make interaction as if it is a user
        await userEvent.selectOptions(
        screen.getByRole("combobox", { name: /pick a category/i }),
        "Rent"
        );
        await userEvent.type(screen.getByPlaceholderText(/planned cost/i), "1000");
        await userEvent.type(screen.getByPlaceholderText(/actual cost/i), "9000");
        await userEvent.click(screen.getByRole("button", { name: /add/i }));

        // after await click add i hope to see onAdd called with fake info
        expect(onAdd).toHaveBeenCalledWith({
            Category: "Rent",
            Planned: 1000,
            Actual: 9000,
        });

        //  fields are cleared?
        expect(screen.getByRole("combobox")).toHaveValue("");
        expect(screen.getByPlaceholderText(/planned cost/i)).toHaveValue(null);
        expect(screen.getByPlaceholderText(/actual cost/i)).toHaveValue(null);
    });
});




