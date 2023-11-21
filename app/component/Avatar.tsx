"use client"
import React,{ useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { AvatarGroup, List, ListItem, ListItemAvatar, ListItemText, SelectChangeEvent } from '@mui/material';
import RecipeReviewCard from './Card';
export default async function AvatarNav(){
    const [name, setName] = React.useState('');
    const [info,setInfo] = React.useState();
    const [isCard,setIsCard] = React.useState(false);
    const [profile,setProfile] = React.useState(false);
    const handleChange = (event: SelectChangeEvent) => {
      setName(event.target.value);
    };
    const handleInfo = (info: any,flag:boolean) => {
      setInfo(info);
      setIsCard(true);
      setProfile(flag)

    }
    let json = await import('../data.json')
    const data = json.data;
    let number =0,len=4;
  
    return (
        <div>
            <div className="p-10 flex">
              <AvatarGroup className='avatar-con'  max={5}>
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
                    return <Avatar onClick={()=>{handleInfo(ele,flag)}} key={ele.id} className="-ml-2 hover:z-10" sx={flag?({ bgcolor: deepOrange[500] }):({ bgcolor: deepPurple[500] })}>{short}</Avatar>;
                  }else{
                    return <Avatar onClick={()=>{handleInfo(ele,flag)}} key={ele.id} className="-ml-2 hover:z-10" alt={ele.name} src={ele.img} />;
                  }
                })}
              </AvatarGroup>
              {/* {isShown ? ( */}
                     <div className='list-con hidden z-10 hover:block'>
                      <List className='scrollbar mt-4 -ml-2 rounded absolute h-40 overflow-y-scroll' sx={{ width: '100%', maxWidth: 360, bgcolor: 'gray' }}>
                            {data.map((ele)=>{
                               let name = ele.name;
                               const array = name.split(" ");
                               let flag = true;
                               const short= array[0][0] + array[1][0];
                               if (number%2==0) {
                                 flag=false;
                               }
                               number++;
                               if (ele.img) {
                                return (
                                  <ListItem className='cursor-pointer hover:bg-gray-900' key={ele.id} onClick={()=>{handleInfo(ele,flag)}}>
                                  <ListItemAvatar>
                                  <Avatar  className="-ml-2 hover:z-10" alt={ele.name} src={ele.img} />
                                  </ListItemAvatar>
                                  <ListItemText primary={ele.name}  />
                                </ListItem>
                                );
                                
                               }
                               else {
                                return (
                                  <ListItem className='cursor-pointer hover:bg-gray-900' key={ele.id} onClick={()=>{handleInfo(ele,flag)}}>
                                  <ListItemAvatar className='m-0 p-0'>
                                  <Avatar  className="-ml-2 hover:z-10" sx={flag?({ bgcolor: deepOrange[500] }):({ bgcolor: deepPurple[500] })}>{short}</Avatar>
                                  </ListItemAvatar>
                                  <ListItemText primary={ele.name}  />
                                </ListItem>
                                );
                               }
                            })}
                            
                           
                        
                        </List>
                   </div>
              {/* ):(null)} */}
         
            </div>
            <div  className='flex w-100 h-100 p-4 justify-center bg-green'>
                {isCard ? (
              <RecipeReviewCard information={info} flag ={profile} />
                ):(null)}
            </div>
        </div>
    );
}