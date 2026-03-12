import './vendido.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';



import image1 from './imagensMaisVendidos/relogio1.jpg'
import image2 from './imagensMaisVendidos/relogio2.jpg'
import image3 from './imagensMaisVendidos/relogio3.jpg'
import image4 from './imagensMaisVendidos/relogio4.jpg'
import image5 from './imagensMaisVendidos/relogio5.jpg'


function MaisVendido() {
    const imagens = [image1, image2, image3, image4, image5]

    return (
        <section>
            <div className='container-de-tudo'>
                <div className="container-de-inform">
                    <h1 className='title-bestSeller'>Best Seller <span>Product</span></h1>
                    <p className='p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, accusantium suscipit, quas, temporibus recusandae delectus error voluptates illum facere fugiat nisi necessitatibus eligendi minima provident incidunt at velit beatae magni.</p>
                    <button className='btn'>SEE MORE</button>
                </div>
                <div className="slider">

                    <Swiper pagination={{ clickable: true }}
                        slidesPerView={1}
                        spaceBetween={20}
                        modules={[Pagination]}
                        breakpoints={{
                            728: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        className='mySwiper'>
                        {imagens.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt="imagens" className='imageAvaliada' />
                                <div className='continer-avaliação'>
                                    <div className='avaliaçao'>
                                        <div className='star'>
                                            {[...Array(5)].map((_, i) => (
                                                <img key={i} width={20} src={"https://img.icons8.com/fluency/48/star--v1.png"} alt='star'/>
                                            ))}
                                        </div>
                                        <p>Lorem ipsum dolor</p>
                                        <p>vendas: <span>2000+</span></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section >
    )
}
export default MaisVendido
