
import { useState } from "react";
function Game()
{
    const [yesNo,setYesNo]=useState(false)
    const [ask,setAsk]=useState(false)
    const [name , setName]=useState('')
    const [askName,setAskName]=useState(false)
    const [random , setRandom]=useState("")
    const [comp,setComp]=useState('')
    const [result , setResult]=useState('');
    const [round,setRound]=useState(0)
    const [start,setStart]=useState('')
    const [meCounter,setMeCounter]=useState(0)
    const [compCounter,setCompCounter]=useState(0);
    const [show,setShow]=useState(false);
    function setThings()
    {
        setAsk(true);
        setYesNo(true);
    }
    function submit()
    {
        alert(`Let's Start the Game ${name}`)
        // console.log('hello');
        if(name==="")
        {
            alert('Name is necessary')
        }
        setAskName(true)
    }
    function starts()
    {
        alert('You can choose your option')

    }
    function chooseNo()
    {
      //alert('You can choose your option')
     
        const rand = Math.floor(Math.random()*3)+1;
        setRandom(rand);
        console.log(rand);
    
       
    }
   
    

    
    function stone()
    {
        setRound(round+1);
         if(random===2)
         {
         //  alert('Computer Win');
            setComp('computer Choose Paper')
            setCompCounter(compCounter+1)
           setResult('Computer Win');
         }
         else if(random===3)
         {
            setComp('Computer Choose Scissor')
            setMeCounter(meCounter+1)
            setResult(`${name} Win`)
         }
         else{
            setComp('computer choose stone')
            setMeCounter(meCounter)
            setCompCounter(compCounter)
            setResult('Draw')
         }
         chooseNo();
    }
    function paper()
    {
        setRound(round+1);
         if(random===3)
         {
            setComp('Computer Choose Scissor')
            setCompCounter(compCounter+1)
            setResult('Computer Win')
         }
         else if(random===1)
         {
            setComp('computer choose stone')
            setMeCounter(meCounter+1)
            setResult(`${name} Win`)
         }
         else{
            setComp('computer Choose Paper')
            setMeCounter(meCounter)
            setCompCounter(compCounter)
            setResult('Draw')
         }
         chooseNo();
    }
    function scissor()
    {
        setRound(round+1);
         if(random===1)
         {
            setComp('computer choose stone')
            setCompCounter(compCounter+1)
            setResult('Computer Win')
         }
         else if(random===2)
         {
            setCompCounter('computer Choose Paper')
            setMeCounter(meCounter+1)
       setResult(`${name} Win`)
         }
         else{
            setComp('Computer Choose Scissor')
            setMeCounter(meCounter)
            setComp(compCounter);
            setResult('Draw')
         }
         chooseNo();
    }
    function startGame()
    {
         alert('You Have to start the game');
        setRound(0);
        setMeCounter(0);
        setCompCounter(0);
        setResult('')
        setShow(false);
    }
    return(
        <div>
           {
            ask?"":<div>
                 <h2>Do You want to Play a Game??</h2>
                <button onClick={()=>setThings()}>Yes</button>
                <button onClick={()=>setYesNo(false)}>No</button>
            </div>
           }
            
            {
                yesNo?<div>
                 {
                    askName?
                    <div>
                        {/* Game Code begins from here */}
                        <button onClick={starts}>Start</button> <br/> <br/>
                        <button onClick={stone}>Stone</button>
                       
                        <button onClick={paper}>Paper</button>
                        <button onClick={scissor}>Scissor</button>
                        <h2>{comp}</h2>
                       
                       
                       {
                        show?"": <h1>{result}</h1>
                       }
                        {
                           round===0?"": round<=5?((meCounter==compCounter)?<h3>Match Draw</h3> :(meCounter>compCounter)?<h3> Winner:-{name} win </h3>:<h3> Winner:-Computer Win</h3> )  : startGame()
                        }
                       
                     <h2>Round : {round}</h2>
                    
                      
                        
                    </div>
                    :<div>
                         <h1>What is Your Name??</h1>
                    <label id="name">Enter Your Name</label>  <input id="name" type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}></input><br/><br/>
                    <button onClick={submit}>Submit</button>
                    </div>
                 }
                </div>:""
            }

        </div>
    )
}

export default Game;