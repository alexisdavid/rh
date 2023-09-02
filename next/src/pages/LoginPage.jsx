import React, { useState } from 'react'
import curved6 from '../static/img/curved-images/curved-6.jpg'
import Request from '../utils/http'
import {encryptString} from '../utils/encrypt'
import { useNavigate  } from 'react-router-dom';
const request = new Request()
export const LoginPage = () => {
    const navigate = useNavigate ();
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')

    const handleLogin =async()=>{
        let data = {email:email,password:password}
        const response = await request.post('login',data)
       if (response && response.statusCode === 200) {
            sessionStorage.setItem('authToken', encryptString(response.result.access_token));
            let user = encryptString(JSON.stringify(response.result.user))
            sessionStorage.setItem('user', user);
            sessionStorage.setItem('home', response.result.home[0]['url']);
            sessionStorage.setItem('modulos', JSON.stringify(response.result.permisos));
            navigate(response.result.home[0]['url']);
        }
    }
  return (
    <>
     <div className="container position-sticky z-index-sticky top-0">
    <div className="row">
      <div className="col-12">
       
        <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container-fluid pe-0">
            <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " >
             Hanan distribuciones
            </a>
            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">
            
              </ul>
            </div>
          </div>
        </nav>
       
      </div>
    </div>
  </div>
  <main className="main-content  mt-0">
    <section>
      <div className="page-header min-vh-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div className="card card-plain mt-8">
                <div className="card-header pb-0 text-left bg-transparent">
                  <h3 className="font-weight-bolder text-primary text-gradient">NEXT</h3>
                  <p className="mb-0">Ingresa tus credenciales de acceso</p>
                </div>
                <div className="card-body">
                  <form >
                    <label>Usuario</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" onChange={e=>setEmail(e.target.value)} value={email}  placeholder="Usuario" aria-label="Email" aria-describedby="email-addon"/>
                    </div>
                    <label>Password</label>
                    <div className="mb-3">
                      <input type="password" onChange={e=>setPassword(e.target.value)} value={password} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                    </div>
                 
                    <div className="text-center">
                      <button type="button" className="btn bg-gradient-primary w-100 mt-4 mb-0" onClick={handleLogin}>Iniciar Sesión</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    olvidaste tu contraseña? Contacta a sistemas
                   
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{backgroundImage:curved6}}>
                    <img src={curved6} alt="fondo" style={{width:'100%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
 
  {/* <footer className="footer py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-4 mx-auto text-center">
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Company
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            About Us
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Team
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Products
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Blog
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Pricing
          </a>
        </div>
        <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-dribbble"></span>
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-twitter"></span>
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-instagram"></span>
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-pinterest"></span>
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-github"></span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-8 mx-auto text-center mt-1">
          <p className="mb-0 text-secondary">
            Copyright © <script>
              document.write(new Date().getFullYear())
            </script> Soft by Creative Tim.
          </p>
        </div>
      </div>
    </div>
  </footer> */}
    </>
  )
}
