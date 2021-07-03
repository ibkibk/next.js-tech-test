import styled from "styled-components"


export const Container = styled.div`
  display: grid;
  height: 200vh;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "Image textt "
    "Image textt ";



@media (max-width: 1024px) {
  display: grid;
  height: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "Image textt "
    "Image textt ";

}

@media (max-width: 768px) {
  display: grid;
  height: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "Image textt "
    "Image textt ";

}

@media (max-width: 760px) {
  display: grid;
  height: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "Image"
    "textt";  
}

@media (max-width: 700px) {
  display: grid;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "Image"
    "textt";  
}

`


export const Content = styled.div`
  grid-area: textt;
  text-align: left;
  font-size: 18px;
  padding: 0 100px 0 0 ;

  @media (max-width: 1024px) {
  grid-area: textt;
  text-align: left;
  font-size: 14px;
  /* padding: 30px 0 0 80px ; */

}



@media (max-width: 768px) {
  grid-area: textt;
  text-align: left;
  font-size: 14px;
  padding: 30px 0 0 50px ;

}

@media (max-width: 760px) {
  grid-area: textt;
  text-align: center;
  padding: 0 ;
}

  @media (max-width: 700px) {
  grid-area: textt;
  justify-content: center;
  align-items: center;
  margin: 50px;
}

`

export const ImageContainer = styled.div`
 grid-area: Image;
 text-align: left;

@media (max-width: 1024px) {
 grid-area: Image;
 text-align: center;


@media (max-width: 768px) {
  grid-area: Image;
  text-align: right;

}

@media (max-width: 760px) {
  grid-area: Image;
  text-align: center;
}

}
`

