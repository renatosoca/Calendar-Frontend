import { PublicLayout } from '../../layouts';

export const AboutPage = () => {
  return (
    <PublicLayout>
      <main className='about'>
        <div className='about__container'>
          <h2 className='about__title'>Sobre Calendario</h2>

          <div className='about__content'>
            <div className='about__information'>
              <p className='about__paragraph'>Déjame contarte un poco más sobre mi proyecto personal. Se trata de un calendario en línea, donde los usuarios pueden agregar eventos, establecer recordatorios y programar sus actividades diarias. Desde su inicio, el proyecto fue concebido como una herramienta útil y sencilla para ayudar a las personas a administrar su tiempo de manera más efectiva.</p>

              <p className='about__paragraph'>Este proyecto fue creado sin fines de lucro y fue una iniciativa personal para poner mis habilidades de programación en práctica. Con el tiempo, el proyecto ha evolucionado y se ha convertido en una plataforma más robusta, con una interfaz de usuario amigable e intuitiva.</p>

              <p className='about__paragraph'>Me enorgullece decir que el proyecto no va a ser abandonado y que estará en constante mantenimiento para mejorar su funcionalidad y usabilidad. Si alguien con habilidades de desarrollo quisiera unirse al proyecto, ¡sería más que bienvenido! Si estás interesado en colaborar en este proyecto o simplemente quieres compartir tus ideas, no dudes en ponerte en contacto conmigo a través de mi correo electrónico: <span className='about__contact'>u18215194@gmail.com.</span> Estaré encantado de recibir tus comentarios y trabajar juntos en hacer crecer este proyecto personal</p>

              <p className='about__paragraph'>Por otra parte, creo que este proyecto es especialmente útil para aquellos que trabajan desde casa o tienen un estilo de vida muy activo, ya que les permite mantenerse organizados y enfocados en sus tareas diarias. ¡Espero que la gente encuentre el calendario tan útil como yo!</p>
            </div>

            <h3>Interfaces de la App</h3>
            <div className='about__images'>
              <div className='about__image about__image-1'>
                <img className='about__img' src="./calendar.png" alt="" />
              </div>

              <div className='about__image about__image-2'>
                <img className='about__img' src="./calendar2.png" alt="" />
              </div>
              
              <div className='about__image about__image-3'>
                <img className='about__img' src="./calendar3.png" alt="" />
              </div>
              
              <div className='about__image about__image-4'>
                <img className='about__img' src="./calendar4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PublicLayout>
  )
}