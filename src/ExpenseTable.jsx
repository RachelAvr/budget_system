// Base CSS rules
import 'handsontable/styles/handsontable.min.css';
// Main theme variables
import 'handsontable/styles/ht-theme-main.min.css';
import { registerAllModules } from 'handsontable/registry';
import { HotTable, HotColumn } from '@handsontable/react';
import AddNewExpense from './AddNewExpense.jsx'
import {useState} from 'react';
registerAllModules();


export default function ExpenseTable(){
    const [data, setData]= useState([])

     const handleAddExpense = (newRow) => {setData((prev) => [...prev, newRow]); };

    return(
        <>
          <h1> "טבלת הוצאות"</h1>
          <AddNewExpense onAdd={handleAddExpense}/>
            <HotTable
                theme="ht-theme-main-dark-auto"
                data={data}
                rowHeaders={true}
                colHeaders={true}
                licenseKey="non-commercial-and-evaluation">
            <HotColumn title="Category" data="Category" width="170" ></HotColumn>
            <HotColumn title="Planned" data="Planned" width="100" type="numeric"></HotColumn>
            <HotColumn title="Actual" data="Actual" width="100" ></HotColumn>
          </HotTable>
          </>

    )
    

}

