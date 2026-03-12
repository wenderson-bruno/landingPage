import './section-new.css';
import img1 from '../images/relogio-new.jpg';
import img2 from '../images/relogio2-new-ajustado.jpg';
import img3 from '../images/relogio3-new.avif';
import { useState } from 'react';

function SectionNew() {
    const [anima, setAnima] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3]

    /*  */
    function charge(index) {
        setAnima(false);
        setTimeout(() => {
            setCurrentIndex(index)
            setAnima(true)
        }, 100)
    }

    function handleNext() {
        const next = currentIndex + 1 === images.length ? 0 : currentIndex + 1
        charge(next)
    }

    function handlePrevious() {
        const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1
        charge(prev)
    }
    return (
        <section id='new-collection'>
            <div className='containerGeralSection'>
                <h1 className='title-new'>New Collection</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum.</p>
                <div className='container-item'>

                    <div className='mobile-section'>

                        <div className='actionButton' onClick={handlePrevious}>&laquo;</div>
                        <div className='item'>
                            <img
                                className={`images ${anima ? "show" : ""}`}
                                src={images[currentIndex]}
                                alt="image"
                            />
                            <button className='btn-shop'>Shop Now</button>
                        </div>
                        <div className='actionButton' onClick={handleNext}>&raquo;</div>
                    </div>

                    {/* desktop section */}
                    <div className='desktop'>
                        <div className='item'>
                            <img className='images' src={img1} alt="image 1" />
                            <button className='btn-shop'>Shop Now</button>
                        </div>

                        <div className='item'>
                            <img className='images' src={img2} alt="image 2" />
                            <button className='btn-shop'>Shop Now</button>
                        </div>

                        <div className='item'>
                            <img className='images' src={img3} alt="image 3" />
                            <button className='btn-shop'>Shop Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}
export default SectionNew;