import React, { useState } from "react";
import { Layout } from "../../Layouts/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es';
import { ModalAddEvents } from "./components/ModalAddEvents";
import Request from "../../../utils/http";
import {ALERTSUCCESS,ALERTERROR} from '../../../components/constantes'
import moment from 'moment-timezone'
const request = new Request();

export const DashboardHumanResourses = () => {
  const [data, setData] = useState([])
  const [tittle,setTittle] = useState('dd')
  const [personal, setPersonal] = useState([])
  const [ categories, setCategories] = useState([
    {id:0,label:'Contratos',checked:true},
    {id:1,label:'Cumpleaños',checked:false},
    {id:3,label:'Vacaciones',checked:false},
    {id:3,label:'Capacitaciones',checked:false},
    {id:4,label:'Vencimiento de licencias',checked:true},
    {id:5,label:'Eventos creados',checked:false}
])
const [arg,setArg] = useState([])
const [info, setInfo] = useState({
  start: moment().format('YYYY-MM-DD'),
  end: moment().format('YYYY-MM-DD'), 
  title: '',
  comments:'',
  type: '6',
  color: '#3c8ffb',

})
const getDaily = async (args,categories)=> {
  let data={start:moment(args.startStr).format('YYYY-MM-DD'), end:moment(args.endStr).format('YYYY-MM-DD'), categories : categories}

  const response = await request.post(`humanResourses/getEvents`,data)
  let eventos=[]
  
 
  if (response && response.statusCode === 200) {
      response.result.eventos.forEach(element =>{
          let end = moment(element.enddate).add('days', 1);
          eventos.push( { 
              title: element.title, 
              start:moment(element.startdate).format('YYYY-MM-DD'), 
              end:end.format('YYYY-MM-DD'),
              backgroundColor:element.color,
              lineas: element
          } )
      } );
      response.result.vacations.forEach(element =>{
          let end = moment(element.enddate).add('days', 1);
          eventos.push( { 
              title: element.title, 
              start:moment(element.startdate).format('YYYY-MM-DD'), 
              end:end.format('YYYY-MM-DD'),
              backgroundColor:element.color,
              lineas: element
          } )
      } );
      response.result.capacitation.forEach(element =>{
          let end = moment(element.enddate).add('days', 1);
          eventos.push( { 
              title: element.title, 
              start:moment(element.startdate).format('YYYY-MM-DD'), 
              end:end.format('YYYY-MM-DD'),
              backgroundColor:element.color,
              lineas: element
          } )
      } );
      response.result.contratos.forEach(element => {
          let c= moment(element.dateContractFinish).format('MM-DD')
          let y= moment(args.dateContractFinish).format('YYYY')
          eventos.push( { 
              title:  `Fin de contrato de ${element.actualContract} de ${element.name} ${element.lastName}`, 
              start:moment(element.dateContractFinish).format('YYYY-MM-DD'), 
              end:moment(element.dateContractFinish).format('YYYY-MM-DD'),
              backgroundColor:'#c0392b',
              lineas: {
                  participantes:[],
                  title:`Fin de contrato de ${element.actualContract} de ${element.name} ${element.lastName}`,
                  startdate:`${y}-${c} 00:00:00`,
                  enddate:`${y}-${c} 23:59:59`,
                  type:3 
              }
          } )});
      response.result.licencias.forEach(element => {
          let c= moment(element.dateContractFinish).format('MM-DD')
          let y= moment(args.dateContractFinish).format('YYYY')
          eventos.push( { 
              title:  `Vencimiento de licencia de ${element.name} ${element.lastName}`, 
              start:moment(element.id_check).format('YYYY-MM-DD'), 
              end:moment(element.id_check).format('YYYY-MM-DD'),
              backgroundColor:'#f39c12',
              lineas: {
                  participantes:[],
                  title:`Fin de contrato de ${element.actualContract} de ${element.name} ${element.lastName}`,
                  startdate:`${y}-${c} 00:00:00`,
                  enddate:`${y}-${c} 23:59:59`,
                  type:3 
              }
          } )});
      
      
      response.result.c.forEach(element =>{
          let c= moment(element.birthday).format('MM-DD')
          let y= moment(args.startStr).format('YYYY')
          eventos.push({
              title:`Cumpleaños de ${element.name} ${element.lastName}`,
              start:`${y}-${c}`,
              end:`${y}-${c}`,
              backgroundColor:'#045abf',
              type:3,
              lineas:{
                  participantes:[],
                  title:`Cumpleaños de ${element.name} ${element.lastName}`,
                  startdate:`${y}-${c} 00:00:00`,
                  enddate:`${y}-${c} 23:59:59`,
                  type:3 
               }
              })
      })       
       setPersonal(response.result.personal)
  }
          
  setData(eventos)
  setArg(args)
}
const handleMouseOver = (info) =>  setTittle(info.event._def.title)
const handleSubmit=async (info)=>{
  
  let data={
      type:info.type,
      title:info.title,
      startdate:info.start,
      enddate:info.end,
      comments:info.comments,
      color:info.color,
      aditionals:'[]',
      id_capacitation:0,
  }
  
  const response = await request.post('capacitationsHana/satoreEvent',data)
 
  if (response && response.statusCode === 200) {
    setInfo({
      start: moment().format('YYYY-MM-DD'),
      end: moment().format('YYYY-MM-DD'), 
      title: '',
      comments:'',
      type: '6',
      color: '#3c8ffb',
    })
      getDaily(arg,categories)
      return ALERTSUCCESS
  }else{
    return ALERTERROR
  }
  
}

const handleCheckboxClick = (position) => {
        
  let updatedCategories = [...categories];
  updatedCategories[position].checked = !updatedCategories[position].checked;
  getDaily(arg,updatedCategories)
  setCategories(updatedCategories);
};

  return (
    <Layout>
      
        
          <div className="d-flex justify-content-between ">
            <div className="card w-100 p-3" >
          
            
            <ModalAddEvents info={info} handleSubmit={handleSubmit}/>
                    <div className="d-flex ">
                    {categories.map((category, key) => (
                        <CheckboxItem
                            id={key}
                            key={key}
                            label={category.label}
                            checked={category.checked}
                            onCheckboxClick={() => handleCheckboxClick(key)}
                        />
                    ))}
                    </div>
                   
               
            
          
              <FullCalendar
                initialView="dayGridMonth"
                events={data}
                allDay={true}
                plugins={[dayGridPlugin, interactionPlugin]}
                editable={true}
                showWeekNumbers={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                locale={esLocale}
                width={'100%'}
                weekends={true}
                eventMouseEnter={(info)=>handleMouseOver(info)}
                eventMouseLeave= {()=>setTittle('')}
                height={700}
                datesSet={(args) => getDaily(args,categories)}
              />
                <small className=" shadow text-primary mt-1">  {tittle}</small>
            </div>


          </div>
      
      
    </Layout>
  );
};
const CheckboxItem = ({ id, label, checked, onCheckboxClick }) => {
  return (
    <div className="p-3" onClick={onCheckboxClick}>
      <input type="checkbox" id={`md_checkbox_${id}`} className="filled-in chk-col-tea" checked={checked} />
      <label htmlFor={`md_checkbox-${id}`} className="font-15">&nbsp; {label}</label> 
    </div>
  );
};
