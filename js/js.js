*/* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: sans-serif;
}


body {
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 1240px;
    width: 100%;
    margin: auto;

}

nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.link {
    display: flex;
    gap: 22px;
}

.link a {
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;

    letter-spacing: 1px;
    text-transform: uppercase;
}

.btn {
    padding: 15px 11px;
}

.btn button {
    padding: 0 5px;
    background-color: white;
    border: 2px solid white;
    cursor: pointer;
}


/*  ///  HERO QISMI  /// */

.hero_wrapper {
    height: 810px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(./img/head/Rectangle\ \(1\).png);
}

.hero {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.hero>h1 {
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 50.625px;
}

.hero>p {
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.75px;
    /* 125% */
    letter-spacing: 1px;
    margin-bottom: 10px;
}

.hero_btn {
    display: flex;
    gap: 20px;
}

.hero_btn>button {
    border-radius: 35px;
    background: #FF4A32;
    padding: 5px 37px;
    color: white;
    border: 2px solid #FF4A32;
}

/* // HERONI BOTTOM QISMI // */


.hero_bottom_wrapper {
    background-color: #000;
}

.hero_bottom {
    padding: 20px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}


/* // MAIN CONTENT // */

/* // FIRST SECTION // */

.first_section {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-bottom: 30px;
}

.first_section>h1 {}

.first_section>h5 {}

.first_section .first_section_info_img {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
}

.first_section_info_img h1 {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
}

.first_section_info_img p {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23.438px;
}

.first_section_info_img_left {
    background-image: url(./img/section1/Rectangle\ \(6\).png);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 580px;
    width: 580px;
}

.first_section_info_img_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(./img/section1/Rectangle\ \(7\).png);
    height: 580px;
    width: 580px;
}

/* /// SECOND SECTION /// */


.second_section_wrapper {
    height: 736px;
    background-image: url(./img/section2/Rectangle\ \(8\).png);
    background-position: center;
    /* background-size: cover; */
    background-repeat: no-repeat;
}

.second_section {
    padding-top: 45px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.second_section>h3 {
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 50.625px;
}

.second_section h1 {
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.75px;
    /* 125% */
    letter-spacing: 1px;
}

.second_section>p {
    width: 40%;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.75px;
    /* 125% */
    letter-spacing: 1px;
}

.second_section>button {
    border-radius: 35px;
    background: #FF4A32;
    width: 201px;
    height: 33px;
    flex-shrink: 0;
    border: 2px solid #FF4A32;
}

/* /// THRID SECTION /// */

.thrid_section {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.thrid_section_box_info {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
}

.thrid_section_box_info>h1 {
    color: #000;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 38.4px;
}

.thrid_section_box_info>p {
    color: #000;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.5px;

}

.thrid_section_box_info>button {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.5px;
    border-radius: 35px;
    background: #FF4A32;
    padding: 5px 16px;
    border: 2px solid #FF4A32;
}


/* /// FOURTH SECTION /// */


.fourth_section {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
    align-items: center;
}

.fourth_section h1 {
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
}

.fourth_section p {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23.438px;
}


.fourth_section_first_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-image: url(./img/section4/Rectangle\ \(11\).png);
    width: 480px;
    height: 480px;
}

.fourth_section_second_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 480px;
    height: 480px;
    background-image: url(./img/section4/Rectangle\ \(12\).png);
}

.fourth_section_thrid_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 480px;
    height: 480px;
    background-image: url(./img/section4/Rectangle\ \(13\).png);
}



/* /// FIFTH SECTION /// */


.fifth_section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 50px;
}

/* /// SEVENTH SECTION /// */

.seventh_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
}

.seventh_section>h1 {}


.seventh_section_banner {
    display: flex;
    justify-content: center;
    align-items: center;
}

.seventh_section_banner_box {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
}

.seventh_section_banner_box>p {
    color: #FF4A32;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}

.seventh_section_banner_box>span {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}



/* /// EITH SECTION /// */

.eith_section_wrapper {
    background-color: black;
    margin-top: 30px;
}

.eith_section {
    display: flex;
    align-items: center;
    justify-content: center;
}

.eith_section_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 6px;
}

.eith_section_card>h1 {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
}

.eith_section_card>p {
    width: 70%;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.5px;
}


/*     FOOTER QISMI */

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
}

#link>h1 {

}

.footer_link {


}





#link {
    padding-bottom: 10px;
}


.footer_link {
    width: 380px;
    height: 189px;
    display: flex;
    flex-direction: column;
}


.footer_info h1 {
    padding-bottom: 10px;
}

.footer_info {
    padding-left: 20px;
    width: 380px;
    height: 189px;
}

.footer_info_link {
    padding-top: 19px;
}
*/ 