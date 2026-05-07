import { addDoc,getDocs,doc,getDoc,updateDoc,deleteDoc } from 'firebase/firestore'
import React from 'react'
import { collection } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {

async function readDocs() {
  // console.log(data._snapshot.docChanges.forEach(element=>{
  //   console.log(element.doc.data)
  // }))
  const data = await getDocs(collection(db, "Blogs"));

  const blogs = data.docs.map((doc) => {

    let blogData = {
      id: doc.id,
      ...doc.data()
    };

    return blogData;
  });

  console.log(blogs);
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


//get a specific blogp
async function getBlogById(id) {
  const docRef = doc(db, "Blogs", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {

    const blog = {
      id: docSnap.id,
      ...docSnap.data()
    };
    console.log(blog);
    return blog;
  } else {
    console.log("No such document!");
    return null;
  }
}

// update a blog
async function updateBlog(id) {
  const blogRef = doc(db, "Blogs", id);
  await updateDoc(blogRef, {
    title: "Updated Title",
    desc: "Updated Description"
  });
  console.log("Document updated");
}

// delete a blog
async function deleteBlog(id) {
  const blogRef = doc(db, "Blogs", id);
  await deleteDoc(blogRef);
  console.log("Document deleted");
}

  return (
    <div>
      <h1>firestore</h1>
      <button onClick={()=>addBlog("first title","blog description")}>addBlog</button>
      <button onClick={readDocs}>Read Data</button>
      <button onClick={()=>getBlogById("5P4hfrndLRLNmLJnVVLf")}>get blog by id</button>
      <button onClick={() => updateBlog("5P4hfrndLRLNmLJnVVLf")}>Update Blog</button>
      <button onClick={() => deleteBlog("5P4hfrndLRLNmLJnVVLf")}>Delete Blog</button>
    </div>
  )
}

export default App
