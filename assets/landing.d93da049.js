import{n as c,F as d}from"./index.7aaae4e9.js";const m="/img/data/Foto CPW.jpg",u="/img/data/Foto CPP.jpg",v="/img/data/Botanical-line-Art-white-1.png",_="/img/data/basmalah.png",f="/img/data/wedding-contract.png",g="/img/data/eat.png";const h={name:"Landing",components:{"app-fragment":d},data(){return{counter:""}},mounted(){const e=document.querySelector("body");e.classList.add("landing-page"),e.classList.add("no-skin-config"),this.registerParticleJS(),this.registerParticleJS("-2"),this.registerLottieJS(),this.countdownToDate("2023-07-23")},methods:{countdownToDate(e){var a=this,t=new Date(e).getTime();setInterval(function(){var s=new Date().getTime(),i=t-s,n=Math.floor(i/(1e3*60*60*24)),r=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),o=Math.floor(i%(1e3*60*60)/(1e3*60)),l=Math.floor(i%(1e3*60)/1e3);a.counter={day:n,hour:r,minute:o,second:l},i<0&&(clearInterval(countdownFunction),a.counter="Sedang Berlangsung")},1e3)},registerParticleJS(e=""){particlesJS(`particles-js${e}`,{particles:{number:{value:75,density:{enable:!1,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:10,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});let a=function(){requestAnimationFrame(a)};requestAnimationFrame(a)},registerLottieJS(){const e=document.getElementById("lottie-container"),a="json/love.json";lottie.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:a})}}};var p=function(){var a=this,t=a._self._c;return t("app-fragment",[t("div",{attrs:{id:"particles-js"}},[t("div",{attrs:{id:"overlay"}})]),t("section",{staticClass:"container-fluid h-100",attrs:{id:"home"}},[t("div",{staticClass:"row h-100 justify-content-center align-items-end pb-5"},[t("div",{staticClass:"col-lg-12 text-center wow zoomIn animated"},[t("h2",{staticClass:"mt-5",staticStyle:{"font-family":"'Montserrat', sans-serif","font-size":"24px",color:"#ffffff","font-weight":"bold"}},[a._v("Pernikahan")]),t("h3",{staticStyle:{"font-family":"'Great Vibes', cursive","font-size":"72px",margin:"30px 0px",color:"#9E5454"},attrs:{id:"name"}},[a._v("Tia & Revox ")]),t("p",{staticStyle:{color:"#ffffff"}},[a._v("Tanpa Mengurangi Rasa Hormat "),t("br"),a._v(" Kami Mengundang Bapak/Ibu/Saudara/i "),t("br"),a._v(" Untuk Hadir Dalam Acara Pernikahan Kami")]),t("b",{staticStyle:{color:"#9E5454","font-weight":"bold"}},[a._v("23 Juli 2023")])])])]),t("section",{staticClass:"container-fluid",attrs:{id:"bride"}},[t("div",{staticClass:"row justify-content-center align-items-top"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row mt-5"},[t("div",{staticClass:"col-lg-12 text-center wow"},[t("h3",[a._v("Pasangan")]),t("h1",{staticStyle:{"font-family":"'Great Vibes', cursive","font-size":"72px",margin:"30px 0px",color:"#9E5454"},attrs:{id:"pengantin"}},[a._v("Pengantin")]),t("div",[a._v("Maha Suci Allah yang telah menciptakan")]),t("div",[a._v("makhluk-Nya berpasang-pasangan,")]),t("div",[a._v("Ya Allah perkenankanlah pernikahan kami")])])]),t("div",{staticClass:"row mt-5"},[t("div",{staticClass:"col-lg-12 d-flex justify-content-around"},[t("img",{staticClass:"img-fluid w-25",staticStyle:{"-webkit-mask-image":"url('/img/data/mask-photo.png')","-webkit-mask-size":"100%","-webkit-mask-position":"center center","-webkit-mask-repeat":"no-repeat"},attrs:{src:m}}),t("div",{staticClass:"w-25",attrs:{id:"lottie-container"}}),t("img",{staticClass:"img-fluid w-25",staticStyle:{"-webkit-mask-image":"url('/img/data/mask-photo.png')","-webkit-mask-size":"100%","-webkit-mask-position":"center center","-webkit-mask-repeat":"no-repeat"},attrs:{src:u}})])]),t("div",{staticClass:"row mt-5 mb-5 text-center"},[t("div",{staticClass:"col-lg-12"},[t("h2",{staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("Suprihatin Setia Ningsih, S.Pd")]),t("h5",[t("i",{staticClass:"fa fa-instagram mr-1",staticStyle:{color:"#9E5454",transition:"color 0.3s"}}),t("a",{attrs:{href:"https://instagram.com/tiulala_",target:"_blank"}},[a._v("@tiulala_")])]),t("hr",{staticClass:"w-50",staticStyle:{"border-top-color":"#676a6c"}}),t("h4",{staticStyle:{color:"#9E5454"}},[a._v("Putri Pertama Dari")]),t("p",{staticStyle:{"font-weight":"bold",color:"#676a6c"}},[a._v(" Bapak Bambang Kuncoro"),t("br"),a._v(" &"),t("br"),a._v(" Ibu Siti Aminah ")]),t("h1",{staticClass:"my-4",staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("&")]),t("h2",{staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("Revox Rizkian")]),t("h5",[t("i",{staticClass:"fa fa-instagram mr-1",staticStyle:{color:"#9E5454",transition:"color 0.3s"}}),t("a",{attrs:{href:"https://instagram.com/revianrr",target:"_blank"}},[a._v("@revianrr")])]),t("hr",{staticClass:"w-50",staticStyle:{"border-top-color":"#676a6c"}}),t("h4",{staticStyle:{color:"#9E5454"}},[a._v("Putra Kedua Dari")]),t("p",{staticStyle:{"font-weight":"bold",color:"#676a6c"}},[a._v(" Bapak Wahyudi Dono Midjoyo, S.Sn"),t("br"),a._v(" &"),t("br"),a._v(" Ibu Yeniati ")])])])])])])]),t("section",{staticClass:"container-fluid",attrs:{id:"counter"}},[t("div",{attrs:{id:"particles-js-2"}}),t("div",{attrs:{id:"overlay-2"}}),t("div",{attrs:{id:"overlay-3"}}),t("div",{staticClass:"row justify-content-center align-items-center"},[t("div",{staticClass:"col-lg-12 text-center wow zoomIn animated mt-5",staticStyle:{position:"relative"}},[t("img",{staticClass:"im-fluid",staticStyle:{width:"5%"},attrs:{id:"botanical",src:v}}),t("h3",{staticClass:"text-white mt-3 mb-3"},[a._v("Hitung Mundur")]),t("h1",{staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("Menuju Hari Bahagia")]),typeof a.counter=="string"?t("div",{staticStyle:{"font-size":"40px"}},[a._v(a._s(a.counter))]):t("table",{staticClass:"w-75 mx-auto my-3"},[t("thead",[t("tr",[t("th",{staticClass:"text-white"},[t("h2",[a._v(a._s(a.counter.day))])]),t("th",[a._v(":")]),t("th",{staticClass:"text-white"},[t("h2",[a._v(a._s(a.counter.hour))])]),t("th",[a._v(":")]),t("th",{staticClass:"text-white"},[t("h2",[a._v(a._s(a.counter.minute))])]),t("th",[a._v(":")]),t("th",{staticClass:"text-white"},[t("h2",[a._v(a._s(a.counter.second))])])])]),t("tbody",[t("tr",[t("td",[a._v("Hari")]),t("td"),t("td",[a._v("Jam")]),t("td"),t("td",[a._v("Menit")]),t("td"),t("td",[a._v("Detik")])])])]),t("a",{staticClass:"btn mt-3",staticStyle:{"background-color":"#9E5454","font-size":"12px",color:"#fff"},attrs:{href:"https://www.google.com/calendar/render?action=TEMPLATE&text=Tia+%26+Revox+Wedding&location=Jl.+KH.+Sholeh+Iskandar+Kukupu+Blok+Binong+RT+01+RW+05%2C+Kelurahan+Cibadak%2C+Kecamatan+Tanah+Sereal%2C+Kota+Bogor&dates=20230723T020000Z%2F20230723T130000Z"}},[t("i",{staticClass:"fa fa-calendar"}),a._v(" Google Calendar ")]),t("div",{staticClass:"mt-3"},[t("img",{staticClass:"img-fluid w-25",attrs:{src:_}})]),t("p",{staticClass:"mx-auto text-white mt-3 px-3"},[a._v(' "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." ')]),t("h3",{staticClass:"text-white mb-5 mt-4",staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("- Q.S Ar - Rum: 21 -")])])])]),t("section",{staticClass:"container-fluid",attrs:{id:"bride"}},[t("div",{staticClass:"row justify-content-center align-items-top"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row mt-5"},[t("div",{staticClass:"col-lg-12 text-center wow"},[t("h3",[a._v("Waktu & Tempat")]),t("h1",{staticStyle:{"font-family":"'Great Vibes', cursive","font-size":"72px",margin:"30px 0px",color:"#9E5454"},attrs:{id:"pengantin"}},[a._v("Pernikahan")]),t("div",[a._v("Pertemuan adalah permulaan, tetap bersama adalah perkembangan, bekerja sama adalah keberhasilan.")])])]),t("div",{staticClass:"row mt-5 mb-5 text-center"},[t("div",{staticClass:"col-lg-6"},[t("img",{staticClass:"img-fluid",attrs:{src:f}}),t("h1",{staticClass:"mt-4 mb-3",staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("Akad")]),t("hr",{staticClass:"w-50",staticStyle:{"border-top-color":"#676a6c"}}),t("h1",{staticClass:"mb-0",staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("23")]),t("h4",{staticClass:"mt-0"},[a._v("Juli 2023")]),t("h3",{staticClass:"mt-4 mb-1",staticStyle:{color:"#9E5454"}},[a._v("09.00 WIB")]),t("h5",[a._v("s.d. Selesai")])]),t("div",{staticClass:"col-lg-6",attrs:{id:"resepsi"}},[t("img",{staticClass:"img-fluid",attrs:{src:g}}),t("h1",{staticClass:"mt-4 mb-3",staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("Resepsi")]),t("hr",{staticClass:"w-50",staticStyle:{"border-top-color":"#676a6c"}}),t("h1",{staticClass:"mb-0",staticStyle:{"font-family":"'Great Vibes', cursive",color:"#9E5454"}},[a._v("23")]),t("h4",{staticClass:"mt-0"},[a._v("Juli 2023")]),t("h3",{staticClass:"mt-4 mb-1",staticStyle:{color:"#9E5454"}},[a._v("12.00 WIB")]),t("h5",[a._v("s.d. 20.00 WIB")])])])])])])])])},b=[],y=c(h,p,b,!1,null,"86e84101",null,null);const k=y.exports;export{k as default};
