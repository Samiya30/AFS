import { addDoc,getDocs } from 'firebase/firestore'
import React from 'react'
import { collection } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {

async function readDocs() {
  const data = await getDocs(collection(db, "Blogs"));
  // console.log(data._snapshot.docChanges.forEach(element=>{
  //   console.log(element.doc.data)
  // }))
  
  data.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}

async function addBlog(title,desc){
  try{
  let response=await addDoc(collection(db,"Blogs"),{
    title:title,
    desc:desc
  })
  console.log(response)
}catch(error){
  console.log(error)

}
}

  return (
    <div>
      <h1>firestore</h1>
      <button onClick={()=>addBlog("first title","blog description")}>addBlog</button>
      <button onClick={readDocs}>Read Data</button>
    </div>
  )
}

export default App
