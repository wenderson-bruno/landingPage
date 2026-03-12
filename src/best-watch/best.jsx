import './best.css'
import best from '../images/best.jpg'

function BestWatch() {
    return (
        <section>
            <div className='container-best'>
                <div className='todosItem'>
                    <div className='containerDaImagenDoBest'>
                        <img className='imgBest' src={best} alt="imgBest" />
                    </div>
                    <div className='paragrafos'>
                        <h1 className='title'>Bests Watch of 2025</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem deserunt similique incidunt dolorem reprehenderit nihil voluptatibus possimus nostrum, optio eius repellendus ipsum unde officia aut qui velit, nisi cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quos unde optio nesciunt ducimus perspiciatis quae.</p>

                        <div className='numerosDeAlgo'>
                            <div className='itemNumero'>
                                <h4>2025 </h4>
                                <span>ano</span>
                            </div>

                            <div className='itemNumero'>
                                <h4>3000+ </h4>
                                <span>produtos</span>
                            </div>

                            <div className='itemNumero'>
                                <h4> 4105+</h4>
                                <span>clientes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default BestWatch