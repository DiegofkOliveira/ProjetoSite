import React from "react";

import MRV from "../../assets/MRV.jpg";

import { Container, Pesquisa, Footer, DireitosAutorais } from "./styles";


import { BsSearch } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";


import SocialMediaButtons from "./Social/social";

export function Produto() {
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
      <main>
        <h1>Lista de Produtos da Empresa</h1>
      </main>      
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
