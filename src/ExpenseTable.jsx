// Base CSS rules
import 'handsontable/styles/handsontable.min.css';
// Main theme variables
import 'handsontable/styles/ht-theme-main.min.css';
import { registerAllModules } from 'handsontable/registry';
import { HotTable, HotColumn } from '@handsontable/react';
import AddNewExpense from './AddNewExpense.jsx'
import {useRef,useState} from 'react';
registerAllModules();


export default function ExpenseTable(){
    const [data, setData]= useState([])
    //const hotTableRef = useRef(null);

     const handleAddExpense = (newRow) => {setData((prev) => [...prev, newRow]); };

     
     const total = data.reduce((sum, row) => {
        const num = parseFloat(row.Actual);
        return sum + (isNaN(num) ? 0 : num);}, 0);

    return(
        <>
          <h1> "טבלת הוצאות"</h1>
          <AddNewExpense onAdd={handleAddExpense}/>
            <HotTable
               // ref={hotTableRef}
                theme="ht-theme-main-dark-auto"
                data={data}
                rowHeaders={true}
                colHeaders={true}
                licenseKey="non-commercial-and-evaluation">
            <HotColumn title="Category" data="Category" width="170" ></HotColumn>
            <HotColumn title="Planned" data="Planned" width="100" type="numeric"></HotColumn>
            <HotColumn title="Actual" data="Actual" width="100" ></HotColumn>
          </HotTable>
          <div>`total: {total}</div>
          </>

    )
    

}

