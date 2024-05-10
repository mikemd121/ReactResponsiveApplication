
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {HelperService } from '../services/HelperService'
import { Common } from "../services/Common";
import { v4 as uuidv4 } from 'uuid';

const columns = [
  { field: 'acCode', headerName: 'A/C code' },
  { field: 'description', headerName: 'Description', width: 100 },
  { field: 'supplierCode', headerName: 'Supplier code', width: 100 },
  { field: 'supplierName', headerName: 'Supplier name', width: 100 },
  { field: 'contractNo', headerName: 'contract no', width: 100 },
  { field: 'dueDate', headerName: 'Due date', width: 100 },
  { field: 'amountInCtrmUSD', headerName: 'AMOUNT IN CTRM (USD)', width: 100 },
  { field: 'amountInJDE', headerName: 'Amount in JDE', width: 100 },
  { field: 'pdRate', headerName: 'PD Rate', width: 100 },
  { field: 'expectedLoss', headerName: 'Expected Loss', width: 100 },
  { field: 'sfAcctTitle', headerName: 'SF Acct Title', width: 100 },
  { field: 'insurance', headerName: 'Insurance', width: 100 },
  { field: 'insuranceRate', headerName: 'Insurance Rate', width: 100 },
  { field: 'insuranceLimitUSD', headerName: 'Insurance limit USD', width: 100 },
  { field: 'netExposure', headerName: 'Net Exposure', width: 100 },
]
const ReportGrid= () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
      
      HelperService(Common.API_URL)
      .then(resposnse => {
        setTableData(resposnse)});
      }, [])
       console.log(tableData)
 

  return (
      <div style={{ height: 700, width: '100%' }}>
     <DataGrid
       rows={tableData}
       columns={columns}
       pageSize={5}
       getRowId={() => uuidv4()}

     />
   </div>
  )
}
function generateRandom() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
export default ReportGrid