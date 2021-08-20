import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/about_us.module.css'
import why1 from '../img/Whyus2.jpg'
import why2 from '../img/whyus3.jpg'
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from './Navbar'
import Footer from './Footer'


export default class Why_us extends Component {
  state={
    loader:true
}
componentDidMount() {
  setInterval(()=>{
      this.setState({
          loader:false
      })
  },2000)
}
    render() {
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 993 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 992, min: 769 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 768, min: 567 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 566, min: 0 },
          items: 1
        }
      }
        return (
           <div> 
             {
        this.state.loader ?
        <div className={styles.loader}><PacmanLoader  size={20} color={'#FF8080'}  loading={this.state.loader} /></div>
         :
         <div>
<header>
               <div className={styles.header}>
                 <Navbar/>
               <Carousel
                       className={styles.sliderHeader}
                      responsive={responsive} infinite={true}
                      autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={3000}
                      keyBoardControl={false}
                        showDots={false}
                        >
                       <div>
                       <img src={why1} className={styles.headerImage}/>                   
                       </div>
                       <div>
                           <img src={why2} className={styles.headerImage}/>                         
                       </div>
                      
                      
                    </Carousel>
               </div>
             </header>
             <Container>
             <body>
               <div className={styles.body}>
                   <div className={styles.title}><h1>Nega biz</h1></div>
                   <div className={styles.text}>
                        <p><strong>SEVGI VA KO'PROQ SEVGI</strong></p>
                        <p>Flamingoning talabalari juda yaxshi ko'rishadi. Biz o'zimizni bolalar, o'qituvchilar va ma'murlardan iborat g'amxo'r o'quv jamoasini yaratishga bag'ishlaymiz. Bizning ajoyib o'qituvchilar jamoasi sizning kichkintoyingiz bilan abadiy aloqada bo'ladi va uni yulduzlarga intilishga undaydi. Bizning g'amxo'r ma'murlarimiz mijozlarga ajoyib xizmat ko'rsatishadi, chunki mehmondo'stlik biz uchun juda muhimdir. Biz har kuni ertalab / kechqurun oilangizni maktabimizga qabul qilamiz va sizga yordam kerak bo'lsa, shaxsiy narsalaringiz bilan yordam beramiz.
                        </p>
                        <p><strong>YAXSHI YUMALOQ O'QUV REJASI</strong></p>
                        <p>O'quv dasturi chegaralarni uzaytiradi, chunki barcha Flamingo talabalari o'zlarining traektoriya yo'llarida rivojlanish uchun katta imkoniyatlarga ega! Bog'dorchilik, ochiq havoda BEACH, STEAM juma kunlari, katta to'q sariq rangli o'yin maydonchasi va jazli musiqa havzalari kabi boshqa tadbirlar va loyihalar Flamingo-da ta'limni eng yuqori darajadagi va injiq qiladi.
                        </p>
                        <p><strong>XAVFSIZLIK VA SOG'LIQNI SAQLASH</strong></p>
                        <p>Bizning shaxsiy ro'yxatdan o'tgan hamshiramiz bizni katta boo-boo va iicky mikroblaridan asrab qolishimiz uchun juda yaxshi ishni bajaradi! Kamera kabi xavfsizlik xususiyatlari bizni xavfsizligini ta'minlaydi, chunki biz banklar va aeroportlar bilan bir xil tizimlardan foydalanamiz.
                        </p>
                        <p><strong>MEXRIBONLIK ELCHILARI</strong></p>
                        <p>Flamingo bitiruvchilari muvaffaqiyatli ekanligi va bolalar bog'chasi darajasidan tashqarida ekanligi isbotlangan. Natijada ba'zi birlar xususiy maktablarga, Iqtidorli va iste'dodli o'quvchilarga yoki boshlang'ich maktablarning etakchilariga borishadi. Qaerga borishidan qat'i nazar, ular muammoga duch kelmoqdalar.
                        </p>
                        <p>
                        Yaqinda sizni orolda ko'rishga umid qilamiz!
                        </p>
                   </div>
               </div>
             </body>
             </Container>
             <Footer/>
        </div>                            
               }
         
            </div>
        )
    }
}
