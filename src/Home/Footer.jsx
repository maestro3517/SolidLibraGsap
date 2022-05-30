import { css,styled } from "solid-styled-components";
import { Card } from "solid-bootstrap";

export default function Footer(props) {

  let { scrollRef } = props;

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const FooterRootCard = css`
    bottom: 0;
    color: white;
    background-color: #0e4295 !important;
    width: 100vw;
    padding: 1% 3%;
    height: 20vh;
    display: table-cell;
    vertical-align: middle;
    border-radius: 0px !important;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, .50) !important;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
      font-size: 100%;
      padding:0%;
      height: auto;
    }
  `

  const FooterLink = styled.a`
    color: white !important;
    text-decoration: underline !important;

    &:active{
      color: #009869 !important;
    }

    &:hover{
      color: #009869 !important;
    }

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
      font-size: 90%;
      width: 100%;
      padding-right:2%;
      height: auto;
    }

    padding-right:2%;
    font-size:130%;
    font-family: inter, sans-serif  !important;
  `
  
  const FooterText = styled.div`
    color:white !important;
    padding:0.5% 0%;
    font-family: inter, sans-serif  !important;
    font-size:${props=>props.Size};

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
      font-size: 90%;
      padding:2% 0%;
    }
  `

  const SocialDiv = styled.div`
    color:white !important;
    text-align:right;

    .MuiIconButton-root {
      color: white;
      text-shadow: 2px 2px 4px #212529 !important;
    }

    .MuiSvgIcon-fontSizeLarge {
      font-size: 160%;
    }

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
      .MuiSvgIcon-fontSizeLarge {
        font-size: 120%;
      }

      .MuiIconButton-root {
        padding: 3%;
      }
    }

  `

  const StyledArrow = styled.button`
    background-color:#009869  !important;
    margin-left:7% !important;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
      margin-top:10%  !important;
      padding: 5% !important;
    }
  `

  const Grid=styled.div`
    display:grid;
  `


  return (

    <Card  class={`${FooterRootCard} panel footer`}>

        <Grid container spacing={3}>

          <Grid item xs={12}>
            <FooterLink to="/PP" >Privacy Policy</FooterLink>
            <FooterLink to="/SM" >Sitemap</FooterLink>
          </Grid>


          <Grid item xs={6} >
          <FooterText Size='80%'><i>*Disclaimer : Images for reference only</i></FooterText>
            <FooterText >@Copyright Libra Steel 2020. All rights reserved.</FooterText>
            <FooterText >Crafted by <a style={{color:'#FFFFFF',textDecoration:'underline'}} href='http://www.idcdigital.org/'>Innovation & Design Consultancy</a></FooterText>
          </Grid>

          <Grid item xs={6} >
            <SocialDiv >
              {/* <IconButton>
                <InstagramIcon fontSize='large'></InstagramIcon>
              </IconButton>
              <IconButton >
                <FacebookIcon fontSize='large'></FacebookIcon>
              </IconButton>
              <IconButton >
                <LinkedInIcon fontSize='large'></LinkedInIcon>
              </IconButton>
              <IconButton >
                <TwitterIcon fontSize='large'></TwitterIcon>
              </IconButton> */}
              <StyledArrow onClick={scrollToTop}>
              </StyledArrow>
            </SocialDiv>
          </Grid>

        </Grid>

    </Card>
  );
}