import { css, styled } from "solid-styled-components";

const Quote = () => {

    const QuoteDiv = css`
    background:white;
    text-align: center;
        width: 100%;
        margin: 0px auto; 
        height: 80vh;
        // margin: 150px auto;
        display: flex;
        align-items: center;

        @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
            height: auto;
            padding:10% 0%;
            width: 90%;
        }

        @media only screen and (min-height: 1025px){
            height: auto;
            padding:10% 0%;
        }
    `

    const BrandingH2 = styled.h2`
        font-family: inter, sans-serif  !important;
        font-weight: 500 !important;
        color: #737373 !important;
        font-size: 230%;
        line-height:150%;

        @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
            height: auto;
            font-size: 150%;
        }
    `


    return (
        <>
            <div className={`${QuoteDiv} panel`}>
                <div>
                    <BrandingH2>Libra Steel endeavours to deliver international standard steel products to its buyers.</BrandingH2>
                </div>
            </div>
        </>
    );
}


export default Quote;