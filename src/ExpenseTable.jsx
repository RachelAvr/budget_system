// Base CSS rules
import 'handsontable/styles/handsontable.min.css';
// Main theme variables
import 'handsontable/styles/ht-theme-main.min.css';
import { registerAllModules } from 'handsontable/registry';
import { HotTable, HotColumn } from '@handsontable/react';
import AddNewExpense from './AddNewExpense.jsx'
import {useState,useEffect, useRef} from 'react';
import { Hook, Console, Decode, Unhook } from 'console-feed'
import ConsoleLogs from './ConsoleLogs'



registerAllModules();


export default function ExpenseTable(){
    const [logs, setLogs]= useState([])
    const [data, setData]= useState([])

    const handleAddExpense = (newRow) => {setData((prev) => [...prev, newRow]); };

     
    const total = data.reduce((sum, row, index) => {
        const num = parseFloat(row.Actual);
        return sum + (isNaN(num) ? 0 : num);}, 0);
    
    useEffect(()=>{console.log(`[totalPlanned] total sum was updated ${total}`)}, [total]);
    useEffect(() => {
                const hookedConsole = Hook(window.console,
                (log) => setLogs((currLogs) => [...currLogs, log]),false)
                return () => Unhook(hookedConsole)
        }, [])
        

    return(
        <>
          <h1> טבלת הוצאות</h1>
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
          <div>total: {total}</div>
          <ConsoleLogs logs={logs}/>
          </>

    )
    

}

