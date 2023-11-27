import React, {useState} from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';

import Img6 from './art/img1 (1).png'
import Img8 from './art/img1 (1).jpg'
import Img3 from './art/img1 (2).jpg'
import Img4 from './art/img1 (3).jpg'
import Img5 from './art/img1 (4).jpg'
import Img1 from './art/img1 (5).jpg'
import Img15 from './art/img1 (6).jpg'
import Img9 from './art/img1 (7).jpg'
import Img2 from './art/img1 (8).jpg'
import Img10 from './art/img1 (9).jpg'
import Img11 from './art/pic1.jpg'
import Img12 from './art/pic2.jpg'
import Img13 from './art/pic3.jpg'
import Img14 from './art/pic4.jpg'
import Img7 from './art/pic5.jpg'
import Img16 from './art/pic6.jpg'
import Img17 from './art/pic7.jpg'
import Img18 from './art/pic8.jpg'
import Img19 from './art/pic9.jpg'
import Img20 from './art/pic10.jpg'
import Img21 from './art/pic11.jpg'
import Img22 from './art/pic12.jpg'


const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
        {
            id: 22,
            imgSrc: Img22,
        }
      
    ]
    const [model, setModel] = useState(false);
    const [tempingSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempingSrc}/>
        
            <CloseIcon onClick={() => setModel(false)}/>

        </div>
         <div className="gallery">
            {data.map((item, index)=>{
                return (
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}}/>
                    </div>

                )
            })}

         </div>

        </>
       
    )
}

export default Gallery