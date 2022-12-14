import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import transport1 from "../../assets/img/transport1.jpg";
import cooperative from "../../assets/img/cooperative.jpeg";
import shipping from "../../assets/img/shipping.webp";
import get from "../../assets/img/get.webp";
import { Link } from "react-scroll";

import text from "./DText";

const transport =
  "Pour tout vos services de déplacement de marchandise d'un point A à un point B, service de courier et de livraison. Genie-Collaboration est un partenaire idéal et à votre disposition ses services dans la rigueur et la sérénité absolue.";
export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "10px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              Constriure des partenariats solides dès le départ
            </h1>
            <p className="font14">
              Un démarage efficace grâce à des spécialistes à votre service.
              <br />
              Tout au long de votre projet, notre équipe chargée de l’implémentation et du service se tiendra à vos côtés.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="GC-Négoces"
                subtitle={<>
                  {text.negoce.slice(0, 144)+"..."}<a style={{cursor:"pointer",fontWeight:700}}>Voir plus</a>
                  </>}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="GC-Transport & Logistique"
                subtitle={<>
                  {transport.slice(0, 78)+"..."}<a style={{cursor:"pointer",fontWeight:700}}>Voir plus</a>
                  </>}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="GC-Expédition"
                subtitle={<>
                  {text.expedition.slice(0, 144)+"..."}<a style={{cursor:"pointer",fontWeight:700}}>Voir plus</a>
                  </>}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="GC-Conseil & Divers services"
                subtitle={<>
                  {text.conseil.slice(0, 144)+"..."}<a style={{cursor:"pointer",fontWeight:700}}>Voir plus</a>
                  </>}
              />
            </ServiceBoxWrapper>
            {/* <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="GC-Marketplace"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </ServiceBoxWrapper> */}
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Un démarrage facile et efficace.</h4>
                <h2 className="font40 extraBold">Expertise & conseils</h2>
                <p className="font15">
                Notre équipe expérimentée vous garantit une implémentation rapide et harmonieuse.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                  <Link to="services">
                    <FullButton
                      title="Nos services"
                    />
                    </Link>
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                  <Link to="contact">
                    <FullButton
                      title="Contactez-nous"
                      border
                    />
                  </Link>
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={cooperative} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={shipping} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={get} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={transport1} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;
