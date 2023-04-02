import React, {useState, useEffect} from "react";

function App(){

  const [className, setName] = useState([{}])
  const [numAssignments, setAssignments] = useState([{}])

  useEffect(()=>{
      fetch("/className").then(
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
    fetch("/classMarks").then(
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
          (typeof className.className === 'undefined')?(
            <h1>Loading...</h1>
          ):
          (
            className.className.map((className) =>
              (
                <h1 key={className.id}>Name of Class: {className}</h1>
              )
            )
          )
        }
        {
          (typeof numAssignments.classMarks === 'undefined')?(
            <h1>Loading...</h1>
          ):
          (
            numAssignments.classMarks.map((classMarks) =>
              (
                <h1 key={1}>Current Marks: {classMarks}</h1>
              )
            )
          )
        }
    </div>
  )
}

export default App