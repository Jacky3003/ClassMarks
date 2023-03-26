import React, {useState, useEffect} from "react";

function App(){

  const [className, setName] = useState([{}])
  const [numAssignments, setAssignments] = useState([{}])

  useEffect(()=>{
      fetch("/classInfo").then(
        res => res.json()
      ).then(
         className =>{
           setName(className)
           console.log(className)
         }
       )
    }
  ,[])

  useEffect(()=>{
    fetch("/classAmount").then(
      res => res.json()
    ).then(
       numAssignments =>{
         setAssignments(numAssignments)
         console.log(numAssignments)
       }
     )
  }
  ,[])

  return(
    <div>
        {
          (typeof className.classInfo === 'undefined')?(
            <h1>Loading...</h1>
          ):
          (
            className.classInfo.map((classInfo) =>
              (
                <h1 key={classInfo.id}>Name of Class: {classInfo}</h1>
              )
            )
          )
        }
        {
          (typeof numAssignments.classAmount === 'undefined')?(
            <h1>Loading...</h1>
          ):
          (
            numAssignments.classAmount.map((classAmount) =>
              (
                <h1 key={1}>Number of Assignments: {classAmount}</h1>
              )
            )
          )
        }
    </div>
  )
}

export default App