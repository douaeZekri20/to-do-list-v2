import React,{useContext} from 'react';
import{tdd} from "./FormTaskContext";
import Task from './Task';


export default function Context() {
    const{
        tasks,
        settasks,
        task,
        settask,
        addtask,
        deletetask,
        modifierTache
    }=useContext(tdd);
  return (
    <div className='bgcl'>

      <h1 >TO DO LIST APP V2</h1>
      
      <br />
      <form action="">
        <div className='d-flex justify-content-center align-items-center'>
       ENTRER UNE TACHE : <input type="text" id='btn1' placeholder='Afficher votre tache' className='w-50 form-control mx-5' value={task} onChange={(e)=>{settask(e.target.value)}}  />
       <input  type="button" onClick={addtask} className='btn btn-outline-primary'  value="AJOUTER" />
       

        </div>
       

      </form>
      <br /><br />
      <h2>TASKS</h2>
      <br />
     <ul>
        {
            tasks.map((t)=>{
                return <li   style={{listStyle:"none" ,margin:"10px"}}><Task delf={(idp)=>{deletetask(t.id)}} modifierTache = {() => modifierTache(t.id)} key={t.id} txt={t.nom} done = {t.done} /></li> 

            })
        }
     </ul>

    </div>
  )
}

    <div>Context</div>

  
