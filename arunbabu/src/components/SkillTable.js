// import React from 'react'
// import { descriptions } from '../setup'
// import MaterialTable from 'material-table'

// export default function SkillTable(props){


//     const experienceList = ["skill", "experience","version","last_used"]
//     const {data, title} = props
//     const tempCols = experienceList.map( (key) => {
//         return ( { title: descriptions[key].name, field: key } ) } )       
    
//     const newData = data.map( d => {
//         const {skill,experience_years, experience_months,version, last_used} = d
//         return {skill,experience: `${experience_years} years ${experience_months} months`,version, last_used}
//     })


//             return(
//                 <MaterialTable
//                 columns={tempCols}
//                 data={newData}
//                 title={title}
//                 options={{
//                     filtering: false,
//                     search: false,
//                     selection: false,
//                     showTitle:true,
//                     pageSize:newData.length,
//                     // pageSizeOptions:[5,10,20,50,100],
//                   }}
//                 />
//             )
// }
    

