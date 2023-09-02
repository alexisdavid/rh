import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Aside = ({toogleElement}) => {
  const [modulesItems, setModulesItems] = useState([]);
  useEffect(() => {
    getModules();
  }, []);
  const getModules = () => {
    let modulos = sessionStorage.getItem("modulos");
    setModulesItems(JSON.parse(modulos));
  };

  return (
    <aside  className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y bg-white"  id="sidenav-main" style={{ overflowX: "hidden" }}>
      
      <i onClick={e=>toogleElement()} class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-xl-none" aria-hidden="true" id="iconSidenav"></i>
     
      <Logo />
     
      
        <ModuleList>
          {modulesItems.map((module, key) => {
           
            const { modulo,icono ,submodulos,url} = module;
            
            return (
              <ModuleListItem key={key} id={key} icono={icono} modulo={modulo}>
                <ModuleListItemColapsible key={key} id={key} submodulos={submodulos} />
              </ModuleListItem>
            );
          })}
        </ModuleList>
       
    </aside>
  );
};
const Logo=()=>{
  return (
    <>
    <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
        <Link className="navbar-brand m-0" to={"/"}>
          <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold" style={{ fontSize: "25px" }}>
            Next
          </span>
        </Link>
      </div>
      <hr className="horizontal dark mt-0" />
    </>
  )
}

const ModuleList=({children}) =>(
  <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main" style={{height: "86vh",overflowX: "hidden"}}>
    <ul className="navbar-nav" style={{listStyle: 'none'}}>{children}</ul>
  </div>
)

const ModuleListItem=({id,icono,modulo,children}) =>{
  return(
    <li className="nav-item " key={id}>
    <a data-bs-toggle="collapse" href={`#basicExamples${id}`} className="nav-link " aria-controls="basicExamples" role="button" aria-expanded="false" >
      <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
          <i className={icono} style={{color:'#1c3257',fontSize:'13px'}}></i>
      </div>
      <span className="nav-link-text ms-1">{modulo}</span>
    </a>
    {children}
    </li>
  )
}

const ModuleListItemColapsible=({id,submodulos})=>{
  return(
    <div className="collapse " id={`basicExamples${id}`} key={`div-${id}2`}>
      <ul className="navbar-nav ps-3" style={{listStyle: 'none'}}>
        {submodulos.map((submodulos, i) =>{
          
          const {sub_module,identificador,icono,items,url}=submodulos
          return(

            identificador==0?
            <ModuleItemColapsibleSimple sub_module={sub_module} i={i} icono={icono} url={url} />:<ModuleItemColapsible sub_module={sub_module} i={i} icono={icono} items={items}/>
            )
          })}
        </ul>
    </div>
  )
}
const ModuleItemColapsible=({sub_module,i,icono,items})=>{
  return(
    <li className="nav-item " key={`${i}`} >
              <a className="nav-link  "  data-bs-toggle="collapse" aria-expanded="false" href={`#gettingStartedExample${i}`} >
                <span className="sidenav-mini-icon"> <i className={icono}/></span>
                <span className="sidenav-normal" >
                <i className={icono}/> &nbsp;
                  {sub_module}<b className="caret"></b>
                </span>
              </a>
                <div className="collapse " id={`gettingStartedExample${i}`}>
                  <ul className="navbar-nav ps-3 flex-column" style={{listStyle: 'none'}}>
                    {items.map((item, i) =>{
                      const {sub_module,icono} = item
                    
                      return(
                    <li className="nav-item" key={`${i}item`}>
                      <a
                        className="nav-link "
                        href="https://www.creative-tim.com/learning-lab/bootstrap/quick-start/soft-ui-dashboard"
                        target="_blank"
                      >
                        <span className="sidenav-mini-icon text-xs"> <i className={icono}></i> </span>
                        <span className="sidenav-normal"><i className={icono}></i> {sub_module} </span>
                      </a>
                    </li>

                      )
                    })}
                 
                  </ul>
                </div>
            </li>
  )
}
const ModuleItemColapsibleSimple=({sub_module,icono,url})=>{
  return(
    <li className="nav-item  ml-3 p-0">
        <Link className="nav-link "to={url}>
        <span className="sidenav-mini-icon" > <i className={icono}></i> </span>
        <span className="sidenav-normal" ><i className={icono}></i> {sub_module} </span>
        </Link>
    </li>
  )
}