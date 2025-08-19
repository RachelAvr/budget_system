
export default function ConsoleLogs({logs}){
     const downloadLogs = () => {
        const logText = logs.map((log, index)  => 
            `[${index + 1}] ${log.data.join(' ')}`).join('\n');
            const blob = new Blob([logText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `user-logs-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);}

    return(
         <button onClick={downloadLogs} disabled={logs.length === 0}>
                    Download Logs
                </button>

    )
}