import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import Heroposter from "@/assets/Hero-Poster.png";
import Image from "next/image";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left div */}
          <div className="flex-1">
            <h4 className="text-teal-700 text-14 font-semibold text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 lg:leading-[60px]">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-[30px]">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>{" "}
            <br />
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-[30px">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-5">
              <Button text={"Learn More"} />
            </div>
          </div>

          {/* right div */}
          <div className="flex-1">
            <Image src={Heroposter} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
