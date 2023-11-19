"use client"
import React,{ useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { AvatarGroup, SelectChangeEvent } from '@mui/material';

export default async function AvatarNav(){
    const [name, setName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setName(event.target.value);
    };
    let json = await import('../data.json')
    const data = json.data;
    let number =0,len=4;
    return (
        <div>
              <div className="p-10">

<div>
<FormControl className="bg-white" sx={{ m: 1, minWidth: 120 }} size="small">
  <InputLabel id="demo-select-small-label" className="bg-white">Peoples</InputLabel>
  <Select
    labelId="demo-select-small-label"
    id="demo-select-small"
    className="bg-white"
    value={name}
    label="Name"
    onChange={handleChange}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    {data.map((element:any)=>{
      return   <MenuItem key={element.id} value={element.name}>{element.name}</MenuItem>;
    })}
  
    
  </Select>
</FormControl>
</div>

</div>
        <AvatarGroup max={5}>
            {data.map((ele:any)=>{
              let name = ele.name;
              const array = name.split(" ");
              let flag = true;
              const short= array[0][0] + array[1][0];
              if (number%2==0) {
                flag=false;
              }
              number++;
               if (ele.img =="") {
                return <Avatar key={ele.id} className="-ml-2 hover:z-10" sx={flag?({ bgcolor: deepOrange[500] }):({ bgcolor: deepPurple[500] })}>{short}</Avatar>;
              }else{
                return <Avatar key={ele.id} className="-ml-2 hover:z-10" alt={ele.name} src={ele.img} />;
              }
            })}
          </AvatarGroup>
        
        </div>
    );
}