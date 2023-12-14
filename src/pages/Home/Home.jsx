import React from "react";

import MRV from "../../assets/MRV.jpg";

import { Container, Pesquisa, Footer, DireitosAutorais } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

import { BsSearch } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import imagem1 from "../../assets/Caminhao.jpg";
import imagem2 from "../../assets/Completo.jpg";
import imagem3 from "../../assets/Cozinha.jpg";
import imagem4 from "../../assets/Ferramentas.jpg";
import imagem5 from "../../assets/Painel.jpg";
import imagem6 from "../../assets/Tijolo.jpg";
import imagem7 from "../../assets/Tudo.jpg";

import SocialMediaButtons from "./Social/social.jsx";

export function Home() {
  return (
    <Container>
      <header>
        <img src={MRV} alt="MRV Recursos Pedagógicos" />
        <div>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="/produtos">Produto</a>
        </div>
      </header>
      <Pesquisa>
        <input placeholder="O que você procura?" />
        <button type="button">
          <BsSearch />
        </button>
        <button type="button" href="/carrinho">
          <FaCartShopping />
        </button>
      </Pesquisa>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imagem1} alt="imagem1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem2} alt="imagem2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem3} alt="imagem3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem4} alt="imagem4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem5} alt="iamgem5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem6} alt="imagem6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem7} alt="imagem7" />
        </SwiperSlide>
      </Swiper>
      <Footer>
        <div>
          <SocialMediaButtons />
        </div>
        <div>
          <div>
            <h1>Missão</h1>
            <p>Texto da missão vai aqui.</p>
          </div>
          <div>
            <h1>Visão</h1>
            <p>Texto da visão vai aqui.</p>
          </div>
          <div>
            <h1>Valores</h1>
            <p>Texto dos valores vai aqui.</p>
          </div>
        </div>
      </Footer>
      <DireitosAutorais>
      <div>
        <p>
          &copy; 2023 MRV Recursos Pedagógicos. Todos os direitos reservados.
        </p>
      </div>
      </DireitosAutorais>
    </Container>
  );
}
