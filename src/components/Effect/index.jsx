import React, {useState, useEffect} from 'react'

const Effect = () => {

const colours = ['tan', 'firebrick', 'cadetblue', 'gold', 'plum']
const [value, setValue ]= useState(0);
const [count, setCount] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    console.log('Colour changes')
    setCount(count + 1)

  }, (3000));
  console.log("timer", timer)

  return () => {
    clearInterval(timer)
    console.log("clear")
  }}

/*function handleClick(){
    setValue(prevValue => prevValue + 1)

    if(value % 10 === 0){
        setSpecialValue(prev => prev +1)
    }*/
    , [count])
return (
    <>
    <div class="ela" style={{backgroundColor: colours[count]}}></div>
    <h2>Effects</h2>
    
    </>
  )
}

export default Effect
