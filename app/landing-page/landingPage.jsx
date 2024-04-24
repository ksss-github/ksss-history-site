
import rectangle from "../../public/images/Rectangle 71.png"
import Image from "next/image";
import BtnLight from "../../components/button/BtnLight";
import "./landingPage.css"



export default async function LandingPage() {
  
  return (
    <div>

      <section className="achievement">
        <div><p className="achievement__number">200+</p>
        <p className="achievement__text">år av historia</p></div>
        <div><p className="achievement__number">60+</p>
        <p className="achievement__text">årsbocker</p></div>
        <div><p className="achievement__number">50+</p>
        <p className="achievement__text"> medaljer</p></div>
      </section>
      
      <section>    
        <Image src={rectangle} alt="KSSS historia" className="ksss__historia" />
        <div className="updates">
        <h2 className="updates__header">Från startskott till idag</h2>
        <p className="updates__text">Utforska KSSS historia, från dess grundande 1830, och upptäck en rik värld av seglingskultur och framstående prestationer. Det finns mycket att hitta!</p>
      </div>
</section>

<section className="event__section">
  <h3 className="event__header">Milstolpar i vår historia</h3>
  <div className="event__card">
    <h3>1905</h3> 
<p>Svenska Seglarförbundet bildas </p>
  </div>

</section>


<section className="omoss__box">
  <h6 className="omoss__header">träffa historiska kommitteen</h6>
  <p className="omoss__text">Träffa personerna som arbetar på att bevara KSSS historia</p>
  <BtnLight>OM OSS</BtnLight>
</section>
      

    </div>
  );
}
