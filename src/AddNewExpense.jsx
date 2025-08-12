import {useState} from 'react';

export default function AddNewExpense({onAdd}){
    const [category ,setCategory]= useState('');
    const [planned ,setPlanned]= useState('');
    const [actual ,setActual]= useState('');

    const handleSubmit = (e)=>{
            e.preventDefault()
            onAdd({Category:category , Planned:Number(planned), Actual:Number(actual)});
            setCategory('');
            setPlanned('');
            setActual('');
    }
    return(
        <form onSubmit={handleSubmit}>
                 <label>Pick a category:
                <select name="selectCategory" value={category}  onChange={(e)=>setCategory(e.target.value)}>
                    <option value="" disabled hidden></option>
                    <option value="Rent">Rent</option>
                    <option value="Bills">Bills</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Fun">Fun</option>
                    <option value="Car">Car</option>
                </select>
                </label>
                <input type="number" placeholder="Planned cost" value={planned} onChange={(e)=>setPlanned(e.target.value)}></input>
                <input type="number" placeholder="Actual cost" value={actual} onChange={(e)=>setActual(e.target.value)}></input>
                <button type="submit">Add</button>


        </form>
    )

}