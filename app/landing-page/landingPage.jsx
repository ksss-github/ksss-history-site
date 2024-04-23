
import rectangle from "../../public/images/Rectangle 71.png"
import Image from "next/image";
import group from "../../public/images/Group 29.png"
import BtnLight from "../../components/button/BtnLight";
import BtnDark from "../../components/button/BtnDark";


export default async function LandingPage() {
  

  return (
    <div>
      <section><Image src={rectangle} alt="KSSS historia" className="ksss-historia" />
      <section className="section-about"></section>
      <div>
        <h3>Från startskott till idag</h3>
        <p>Utforska KSSS historia, från dess grundande 1830, och upptäck en rik värld av seglingskultur och framstående prestationer. Det finns mycket att hitta!</p>
      </div>
</section>

<section>
Detta hände denna dagen
</section>


<section style={{ position: "relative" }}> 
        <div style={{ position: "relative", display: "inline-block" }}> 
          <Image src={group} alt="KSSS historia" className="ksss-historia" />
          <BtnLight style={{ position: "absolute", bottom: "10px", right: "10px" }}>OM OSS</BtnLight> 
          <BtnDark>DARK</BtnDark>
          
        </div>
      </section>

      

    </div>
  );
}
