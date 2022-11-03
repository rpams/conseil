import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import AddImage1 from "../../assets/img/add/1.png";
import get from "../../assets/img/get.webp";



export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contactez-nous</h1>
            <p className="font14">
            La satisfaction du client est notre plus grande priorité. Si vous êtes content, nous le sommes aussi.   
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nom(s) & Prénom(s):</label>
                <input type="text" id="fname" name="fname" className="font18 Bold" required="true"/>
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font18 Bold" />
                <label className="font13">Sujet:</label>
                <input type="text" id="subject" name="subject" className="font18 Bold" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font18 semiBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Envoyer le message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%", marginLeft: "120px" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <AddImgWrapp3>
                  <img src={get} alt="office" className="radius6" />
                </AddImgWrapp3>
              </div>
              {/* <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}> */}
                  {/* <img src={ContactImg3} alt="office" className="radius6" /> */}
                {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}


const AddImgWrapp3 = styled.div`
  width: 90%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









