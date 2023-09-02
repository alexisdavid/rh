import React,{ useState, useEffect} from 'react';
import { TableInfinityFixed } from '../../../../components/TableInfinityFixed';
import Request from '../../../../utils/http'
import { ModalHeader } from '../../../../components/ReactModal/ModalHeader';
import { ModalBody } from '../../../../components/ReactModal/ModalBody';
import { ReactModal } from '../../../../components/ReactModal';
import { ModalButtons } from '../../../../components/ReactModal/ModalButtons';
import { ModalVacations } from './ModalVacations';
const request = new Request();
const header=[
    {label: 'Status de Aprobacion'},
    {label: 'Inicio'},
    {label: 'Fin'},
    {label: 'Tipo'},
    {label: 'Comentarios'},
    // {label: 'Fecha de Solicitud de Prima Vacacional'},
    // {label: 'Pago de Prima Vacacional'},
    // {label: 'Status'},
]
export const Vacations = ({id}) => {
 
    const [isOpen, setIsOpen]= useState(false)
    const [isOpenPrima, setIsOpenPrima]= useState(false)
    const [data, setData] = useState([]);
    const getData =async () =>{
        const response = await request.get(`humanResourses/getVacations/${id}`)
        if (response && response.statusCode === 200) { setData(response.result.data) }
    }
    const [dataEdit, setDataEdit] = useState([]);
    const [editVacation, setEditVacation] = useState(false);

   useEffect(() => { id > 0 && getData() },[id])

   const handleClick = (linea) =>{
    setEditVacation(!editVacation)
    setDataEdit(linea)
    setIsOpen(!isOpen)

   }
   const tipos = {
        1:'Vacaciones',
        2:'Permiso Especial',
        3:'Permiso Medico / Incapacidad',
        4:'Permiso Medico / Maternidad'
  };

  const estados = {
    1: { status: 'Pendiente', color: 'text-primary' },
    2: { status: 'Aprobado', color: 'text-success' },
    3: { status: 'Rechazado', color: 'text-danger' }
  };
    return (
        <>
        <div>
            <div className="row">
                <div className="col-md-6">

                {/* <button className='btn btn-sm btn-outline-danger  mb-3' onClick={(e) =>setIsOpen(()=>setIsOpenPrima(true))}><i class="fa-solid fa-hand-holding-dollar"></i> Prima vacacional</button> */}
                </div>
                <div className="col-md-6">
                <ModalVacations titleButton={'Agregar'} dataEdit={dataEdit} setEditVacation={setEditVacation} edit={editVacation}  id={id}  reload={getData}/>

                </div>
            </div>
          
           
           <TableInfinityFixed columnsParam={header} aditionalClass='table-striped'   >
            {data.map((linea, key)=>{
                 const tipo = tipos[linea.type] || '';
                 const { status, color } = estados[linea.status] || { status: '', color: '' };
                 
                return(
                    <tr key={key}  onClick={e=>handleClick(linea)}>
                        <td onClick={()=>handleClick(linea)} className={`${color}`}>{status}</td>
                        <td onClick={()=>handleClick(linea)}>{linea.start}</td>
                        <td onClick={()=>handleClick(linea)}>{linea.end}</td>
                        <td onClick={()=>handleClick(linea)}>{tipo}</td>
                        <td onClick={()=>handleClick(linea)}>{linea.comments}</td>
                        {/* <td onClick={()=>handleClick(linea)} className={`${color}`}>{linea.payment_request}</td>
                        <td onClick={()=>handleClick(linea)} className={`${color}`}>{linea.payment_Date}</td> */}
                        <ModalVacations titleButton={''} dataEdit={dataEdit} icon={'fa fa-edit font-15'} setEditVacation={setEditVacation} edit={editVacation}  id={id}  reload={getData}/>
                    </tr>
                )
               })}

            </TableInfinityFixed>
           
         
        </div> 
        
      
        </>
    );
};
    


   