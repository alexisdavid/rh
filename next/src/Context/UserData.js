
export async function loadUser() {
    let usuario={}
      let user =  window.sessionStorage.getItem("token")
    
    //   if (user) {
    //     let user2 = user.slice(1,-1)
    //     // user = base64.decode(user2);
   
    //     if (user) {
  
    //       usuario.id = user.userId
    //       usuario.SuperUser = user.SuperUser
    //       usuario.nombre = user.UserName
    //       usuario.depto = user.Department
    //       usuario.gorup= user.UserGroup
    //       usuario.type = user.UserType
    //       usuario.token = user.token
  
    //     } else {
    //       user.id = { id: 0, tipo: 0 };
    //     }
        // this.setState({ user: user });
        return JSON.parse( user);
    //   }
    }
    // export async function getModules(id) {
    //   const response = await request.get(`getModules/${id}`);
  
    //   if (response && response.statusCode === 200) {
    //     return response.result.data;
    //   }
    // }