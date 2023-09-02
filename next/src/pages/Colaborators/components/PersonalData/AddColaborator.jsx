import React, { useEffect, useState } from "react";
import { PersonalInformation } from "./PersonalInformation";
import { CompanyInformation } from "./CompanyInformation";
import { PersonalDocumentation } from "./PersonalDocumentation";
import { CompanyDocumentation } from "./CompanyDocumentation";
import { PersonalContract } from "./PersonalContract";
import { ContractTermination } from "./ContractTermination";
import { ButtonsToSave } from "../../../../components/ButtonsToSave";
import { StickyMenu } from "../../../../components/StickyMenu";
import { StickySection } from "../../../../components/StickyMenu/StickySection";
import {Vacations} from '../Vacations';




export const AddColaborator = ({
        dataparam,handleData,edad,antiguedad,handleCancel,handleSubmit,department,tags,tagsBoss,setUser,documents,setDocuments,documentsCompany,
        setDocumentsCompany,removeColaborator,errorProps,setErortoRequest,setRemoveColaborator,contratos,setContratos,}) => {

  const [idMenu,setIdMenu]=useState([
    { id: "PersonalInformation", label: "Informacion personal" },
    { id: "CompanyInformation", label: " Informacion profesional" },
    { id: "PersonalDocumentation", label: "Documentacion personal" },
    { id: "CompanyDocumentation", label: "Documentacion empresa" },
    { id: "PersonalContract", label: " Contratos de colaborador" },
    { id: "ContractTermination", label: " Baja de colaborador" }
  ])

  const handleDocuments = (event) => setDocuments({ ...documents, [event.target.name]: event.target.checked });

  const handleDocumentsCompany = (event) => setDocumentsCompany({  ...documentsCompany,  [event.target.name]: event.target.checked });

  const handleContract = (posicion, date, bandera) => {
    let copia = JSON.parse(JSON.stringify(contratos));
    copia[posicion][bandera] = date;
    setContratos(copia);
    bandera == "termino" &&  setUser({ ...dataparam, dateContractFinish: date });
    
  };
  const handleRemoved = (event) => {
    const {name,value,checked}= event.target
    if (name == "cause") {
      setRemoveColaborator({ ...removeColaborator, [name]: value, });
    } else {
      setRemoveColaborator({  ...removeColaborator, [name]: checked });
      setUser({ ...dataparam, activo: !checked });
    }
  };

  useEffect(() => {
    if (dataparam.id>0) {
      let copy = JSON.parse(JSON.stringify(idMenu))
      copy.push({ id: "Vacations", label: " Vacaciones y Permisos" })
      setIdMenu(copy)
    }
  },[dataparam])

  return (
    <>
      <StickyMenu menu={idMenu} />

      <StickySection identificator={"PersonalInformation"}>
        <h5>Informacion personal</h5>
        <PersonalInformation
          data={dataparam}
          handleData={handleData}
          edad={edad}
        />
      </StickySection>

      <StickySection identificator="CompanyInformation">
        <h5>Informacion profesional</h5>
        <CompanyInformation
          data={dataparam}
          handleData={handleData}
          antiguedad={antiguedad}
          department={department}
          tags={tags}
          tagsBoss={tagsBoss}
          setUser={setUser}
        />
      </StickySection>

      <StickySection identificator="PersonalDocumentation">
       <h5> Documentacion personal</h5>
        <PersonalDocumentation
          documents={documents}
          handleDocuments={handleDocuments}
        />
      </StickySection>

      <StickySection identificator="CompanyDocumentation">
        <h5>Documentacion empresa</h5>
        <CompanyDocumentation
          documentsCompany={documentsCompany}
          handleDocumentsCompany={handleDocumentsCompany}
        />
      </StickySection>

      <StickySection identificator="PersonalContract">
        <h5>Contratos de colaborador</h5>
        <PersonalContract
          data={dataparam}
          handleData={handleData}
          handleContract={handleContract}
          contratos={contratos}
        />
      </StickySection>

      <StickySection identificator="ContractTermination">
       <h5> Baja de colaborador</h5>
        <ContractTermination
          removeColaborator={removeColaborator}
          handleRemoved={handleRemoved}
          data={dataparam}
          handleData={handleData}
          handleContract={handleContract}
          contratos={contratos}
        />
      </StickySection>

      {dataparam.id > 0 && 
          <StickySection identificator="Vacations">
            Vacaciones y permisos
            <Vacations id={dataparam.id}/>
          </StickySection>
      }

      <ButtonsToSave
        handleSave={handleSubmit}
        handleCancel={handleCancel}
        bandera={errorProps.type}
        mensaje={errorProps.message}
        setErortoRequest={setErortoRequest}
      />
    </>
  );
};
