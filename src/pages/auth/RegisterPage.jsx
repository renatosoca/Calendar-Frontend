

export const RegisterPage = () => {
  return (
    <AuthLayout title={ 'Registro' } >
      <form action="" className="form-login">
        <div className="login_group">
            <i className="fa-solid fa-user"></i>
            <input type="text" id="user" className="form_input" placeholder="Ingrese su Usuario" />
        </div>

        <div className="login_group">
            <i className="fa-sharp fa-solid fa-unlock"></i>
            <input type="password" id="password" className="form_input" placeholder="Ingrese su Password" />
        </div>

        <input type="submit" className="btn login_submit" id="enviar_login" value="Iniciar sesión" />
      </form>
   </AuthLayout>
  )
}
