import {createContext, useState} from 'react';
export const tdd =createContext();

export default function Todolist({children}) {
    const[tasks,settasks]=useState([
        {id:Math.random()*10, nom :'SPORT' , done:false },
        {id:Math.random()*10, nom :'FILM',done:false  },
        {id:Math.random()*10, nom :'CODING' ,done:false  }

    ]);
    const [task,settask]=useState('');
    const addtask=()=>{
        let ntasks=[...tasks];
        let ntask={};
        ntask.id=Math.random()*10;
        ntask.nom=task;
        ntasks.push(ntask);
        settasks(ntasks);
        settask('');
    };
    const deletetask=(idp)=>{
        let ntasks=tasks.filter((t)=>{
            return t.id!=idp
        })
        settasks(ntasks); 
    }
    const modifierTache=(id)=>{
        settasks(tasks.map(task => task.id===id ? {id:task.id,nom:task.nom,done:true} : task ))
    }
  
    
  return (
    
    <tdd.Provider value={{tasks, settasks, task, settask, addtask, deletetask, modifierTache}}>
        {children}
    </tdd.Provider>
  );
}