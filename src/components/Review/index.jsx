import React from 'react'

const Review = () => {

    const[inputText, setInputText] = useState('')
    const[submitValue, setSubmitValue] = useState('')
  
    const handleInput = (e) => {
      setInputText(e.target.value)
      console.log(e.target.value)
    }
    const handleSubmit = (e) => {
      e.prevent.Deafult()
      setSubmitValue(inputText)
    }
  
  return (
    <>
      <div class="bottomDiv">
        <h2>Did you have a good time? Please leave a review below!</h2>
        <textarea 
        value={inputText}
        onChange={handleInput}
        ></textarea>
        <button 
        type="submit"
        onSubmit={handleSubmit}
        > Submit</button>
      </div>
        <h2>
          Reviews
        </h2>
      <div class="reviews">

      </div>
    </>
  )
}

export default Review

