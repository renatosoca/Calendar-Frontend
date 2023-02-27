import './AuthLayout.css';

export const AuthLayout = ({ children, title }) => {
  return (
    <div className="AuthLayout">
      <div className="AuthLayout__left">
        <div className="AuthLayout__form">
          <h1 className='AuthLayout__title' >{ title }</h1>

          {children}

        </div>
      </div>

      <div className="AuthLayout__right">
        <div className="swiper">
          <div className="swiper swiperLoop">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <small>#Fitness</small>
                <h4>DEBERIAS SER ADICTO</h4>
                <h3>A SUPERARTE</h3>
                <h2>A TÍ MISMO</h2>
              </div>
              <div className="swiper-slide">
                <small>#Fitness</small>
                <h4>Si entrenas Duro,</h4>
                <h3>No solo serás duro,</h3>
                <h2>Serás duro de Superar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
