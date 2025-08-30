import {useState,useEffect} from 'react';

export default function AddNewExpense({onAdd}){
    const [Category ,setCategory]= useState('');
    const [Planned, setPlanned] = useState(0);
    const [Actual, setActual] = useState(0);
    //*You’re storing numbers as strings in state (useState(''))*//
    
      useEffect(() => {
        console.log('[addNewExpense] component mounted');}, []);

    
    //*the form allows submitting empty values. Add required attributes or guard before onAdd yes! but i want to keep the option to have planned/actul=0*//
    const handleSubmit = (e)=>{
            console.log('[addNewExpense] user clicked add')
            e.preventDefault()
            if (!Category || (!Planned && !Actual)) {
            alert("Please fill out all fields");
            console.log('[addNewExpense] cannot add without ctegory and or cost')
            return;
    }
            //*You’re mixing lowercase (planned) and uppercase (Planned) yes! but notice that the table is a specifc packge*//
            onAdd({ Category:Category, Planned:Planned||0, Actual:Actual||0 });
            //*was instead of wad*//
            console.log('[addNewExpense] a row was added to the table', [Category, Planned, Actual])
            setCategory('');
            setPlanned('');
            setActual('');
            console.log('[addNewExpense] all input set to be blank')
    }
    return(
        <form onSubmit={handleSubmit}>
                 <label>Pick a category:
                <select name="selectCategory" value={Category}  onChange={(e)=>{setCategory(e.target.value); console.log('user selected category',e.target.value ) }}>
                    <option value="" disabled hidden></option>
                    <option value="Rent">Rent</option>
                    <option value="Bills">Bills</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Fun">Fun</option>
                    <option value="Car">Car</option>
                </select>
                </label>
                <input type="number" min="0" placeholder="Planned cost" value={Planned} onChange={(e) => {setPlanned(Number(e.target.value));console.log('user typed planned cost', e.target.value)}}/>
                <input type="number" min="0" placeholder="Actual cost" value={Actual} onChange={(e)=> {setActual(Number(e.target.value));console.log('user typed planned cost', e.target.value)}}/>
                <button type="submit">Add</button>


        </form>
    )

}
