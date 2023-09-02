import React from 'react'
import { TableInfinityFixed } from '../../../../components/TableInfinityFixed'

export const TableColaborators = ({colaborators,userImage,handleUpdate}) => {
    const column=[
        {label:'Colaborador',classColumn:'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7  ps-2'},
        {label:'Departamento',classColumn:'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'},
        {label:'Jefe inmediato',classColumn:'text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'},
        {label:'Ingreso',classColumn:'text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'},
        {label:'Editar',classColumn:'text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'},
      ]
      function isValidJSON(str) {
        try {
          let dep= JSON.parse(str);
          return  dep.length>0?   dep[0].label: dep.label
        } catch (error) {
          return str;
        }
      }
  
      const getInfoPersonal=(birthday,ingreso)=>{
        let nac =new Date(birthday).getTime();
        let today =new Date().getTime();
        var diff =( today - nac)/(1000*60*60*24).toFixed(2);
        let annios =(diff/365 ).toFixed(2)
        let arr= annios.split('.')
        let meses= ((arr[1]/100)*365)/30
    
        let ing =new Date(ingreso).getTime();
        let todayAnt =new Date().getTime();
        var diffAnt =( todayAnt - ing)/(1000*60*60*24).toFixed(2);
        let anniosAnt =(diffAnt/365 ).toFixed(2)
        let arrAnt= anniosAnt.split('.')
        let mesesAnt= ((arrAnt[1]/100)*365)/30
  
        let formatIng=ingreso.split('-')
        let d= formatIng.length>0 && `${formatIng[2]}/${formatIng[1]}/${formatIng[0]}`
  
        return [ `${arr[0]} años ${Math.round(meses)} meses`,`${arrAnt[0]} años ${Math.round(mesesAnt)} meses`,d]
  
  
    }
  return (
    <div className="card shadow">
    <TableInfinityFixed columnsParam={column}>
      {colaborators.map((colaborator,key) => {
      const {name,lastName,rfc,wArea,puesto,inmBoss,ingreso,birthday} =colaborator
    
      let dep = isValidJSON(wArea)
      let psto = isValidJSON(puesto)
      let boss = isValidJSON(inmBoss,name)
     

      let dates=getInfoPersonal(birthday,ingreso)
        return(
          <tr key={key}>
            <td>
              <div className="d-flex px-2 py-1">
                <div>
                  <img src={userImage} className="avatar avatar-sm me-3"/>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="mb-0 text-xs">{name} {lastName}</h6>
                  <p className="text-xs text-secondary mb-0">{dates[0]}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-xs font-weight-bold mb-0">{dep}</p>
              <p className="text-xs text-secondary mb-0">{psto}</p>
            </td>
            <td className="align-middle text-center text-sm">
              <span className="text-xs text-secondary mb-0">{boss}</span>
            </td>
            <td className="align-middle text-center">
            <p className="text-xs font-weight-bold mb-0">{dates[2]}</p>
              <p className="text-xs text-secondary mb-0">{dates[1]}</p>
            </td>
            <td className="align-middle text-center">
              <ButtonEdit colaborator={colaborator} handleEdit={handleUpdate} />
            </td>
          </tr>
        )
      })}
    
    </TableInfinityFixed >
  </div>
  )
}

const ButtonEdit=({colaborator, handleEdit})=>(
      <button className="btn btn-sm bg-gradient-primary" onClick={()=>handleEdit(colaborator)}>
        <i className="font-15 fa-regular fa-pen-to-square"></i>
      </button>
)
  