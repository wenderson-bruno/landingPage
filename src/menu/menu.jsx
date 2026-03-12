import './menu.css'
import banner from '../images/relogio-banner.jpg'


function Menu() {


  return (
    <main id='home'>
      <div className='containerdoMenu'>
        <div className='container-do-Timeless'>
          <h1 className="titleMenu">Timeless<span> Watches</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem quod deleniti dolorum quibusdam cupiditate nisi, fugiat molestias! Doloribus animi eligendi saepe. Corrupti voluptate, delectus nesciunt deleniti exercitationem iusto repudiandae!</p>
          <div className='container-btn-buy'><button className='btn-buy'>buy now</button></div>
        </div>
        <div className='cont-banner'>
          <img className='imgBanner' src={banner} alt="banner" />
        </div>
      </div>
    </main>
  )
}
export default Menu