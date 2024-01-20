import {Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Calculator() {
  const[display,setDisplay] = useState('');

  const handleBtn=(e)=>{
    setDisplay(display+e.target.innerText);
  }
    return (
    <div className="bg-stone-50 w-fit p-10 border-zinc-700 border-2">
      <TextField id="outlined-basic" label="Calculator" value={display} variant="outlined" style={{width:'33ch'}}/>
      <div className='flex-col flex gap-3 mt-5'>
        <div className="flex gap-2">
          <Button variant="contained" size="large"  onClick={()=>setDisplay('')}>
            AC
          </Button>
          <Button variant="contained" size="large" onClick={()=>setDisplay(display.slice(0,-1))}>
            DE
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            .
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            /
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="contained" size="large"  onClick={(e)=>handleBtn(e)}>
            9
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            8
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            7
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            *
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            6
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            5
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            4
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            -
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            3
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            2
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            1
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            +
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            00
          </Button>
          <Button variant="contained" size="large" onClick={(e)=>handleBtn(e)}>
            0
          </Button>
          <Button variant="contained" size="large" style={{width:'16ch'}} onClick={()=>setDisplay(eval(display))}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
}
