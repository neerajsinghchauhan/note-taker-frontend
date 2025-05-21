import { useState } from 'react'
import './AddNotePage.css'
import { redirect, useNavigate } from 'react-router-dom'

const AddNotePage = ({addNote}) => {
  const[title,setTitle] = useState("")
  const[body, setBody] = useState("")
  const[category,setCategory] = useState("")

  const navigate = useNavigate()

  const newNote = {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title && !body && !category) {
       return;
    }
      addNote(newNote)
      redirect("/")
      console.log(newNote)
  }

  return (
    <form onSubmit={handleSubmit}>
        <h5>Add New Note</h5>
        <div className='mb-3'>
            <label htmlFor='exampleformControlInput1' className='form-label'>
                Title
            </label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              placeholder="Enter note 's content"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
        </div>
        <div className='mb-3'>
            <label htmlFor='exampleformControlInput1' className='form-label'>
             Content
            </label>
            <textarea
              input="email"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              placeholder="Enter note's content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div className='mb-3'>
                <label htmlFor='exampleformControlInput1' className='form-label'>
                    Note's category
                </label>
                <select className='form-select' 
                aria-label="Default select example" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                style={{height: "50px"}}
                >
                    <option value=''>Pick a category</option>
                    <option value="BUSINESS">Business</option>
                    <option value="PERSONAL">Personal</option>
                    <option value="IMPORTANT">Important</option>
                </select>
            </div>
            <button className='btn btn-primary d-flex justify-content-center' style={{width: "100%"}}>Add Note</button>
        </div>
    </form>
  )
}

export default AddNotePage
