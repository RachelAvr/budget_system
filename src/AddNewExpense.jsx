import {useState,useEffect} from 'react';

export default function AddNewExpense({onAdd}){
    const [category ,setCategory]= useState('');
    const [planned, setPlanned] = useState(0);
    const [actual, setActual] = useState(0);
    //*You’re storing numbers as strings in state (useState(''))*//
    
      useEffect(() => {
        console.log('[addNewExpense] component mounted');}, []);

    
    //*the form allows submitting empty values. Add required attributes or guard before onAdd*//
    const handleSubmit = (e)=>{
            console.log('[addNewExpense] user clicked add')
            e.preventDefault()
            if (!category || !planned || !actual) {
            alert("Please fill out all fields");
            return;
    }
            //*You’re mixing lowercase (planned) and uppercase (Planned)*//
            onAdd({ category, planned: Number(planned), actual: Number(actual) });
            //*was instead of wad*//
            console.log('[addNewExpense] a row was added to the table', [category, planned, actual])
            setCategory('');
            setPlanned('');
            setActual('');
            console.log('[addNewExpense] all input set to be blank')
    }
    return(
        <form onSubmit={handleSubmit}>
                 <label>Pick a category:
                <select name="selectCategory" value={category}  onChange={(e)=>{setCategory(e.target.value); console.log('user selected category',e.target.value ) }}>
                    <option value="" disabled hidden></option>
                    <option value="Rent">Rent</option>
                    <option value="Bills">Bills</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Fun">Fun</option>
                    <option value="Car">Car</option>
                </select>
                </label>
                <input type="number" placeholder="Planned cost" value={planned} onChange={(e) => setPlanned(Number(e.target.value))};console.log('user typed planned cost', e.target.value)}}></input>
                <input type="number" placeholder="Actual cost" value={actual} onChange={(e)=> setActual(Number(e.target.value))};console.log('user typed planned cost', e.target.value)}}></input>
                <button type="submit">Add</button>


        </form>
    )

}
