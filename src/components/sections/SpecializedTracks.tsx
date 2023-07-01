"use client";

import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "../shared/QuarterBox";
// images
import metaverse from "@/assets/metaverse.png";
import ai from "@/assets/ai.png";
import cnc from "@/assets/cnc.png";
import iot from "@/assets/iot.png";
import genetics from "@/assets/gbs.png";
import network from "@/assets/network.png";
import Image from "next/image";

export const data = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: metaverse,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: ai,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: cnc,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "iot",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: iot,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "gbs",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: genetics,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "npt",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: network,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");

  const selectedItemData = data.find((item) => item.slug === selectedItem);
  // console.log(selectedItemData)

  return (
    <section>
      <Wrapper>
        {/* header */}
        <div>
          <h2 className="text-4xl font-bold">Specialized Tracks:</h2>
          <p className="mt-3 text-lg text-slate-600 leading-[30px] max max-w-screen-sm ">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse md:flex-row gap-x-6 gap-y-8">
          {/* content left */}
          <div className="shadow-xl self-start sticky top-28 basis-8/12 rounded-xl border border-slate-200 py-8 px-8 ">
            <h4 className="text-teal-700 text-lg font-medium">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-bold">{selectedItemData?.header} </h3>
            <p className="text-lg text-slate-600 mt-2">
              {" "}
              {selectedItemData?.description}{" "}
            </p>
            <button className="text-teal-700 text-xl mt-4 underline flex gap-x-2 items-end">
              Learn more
              <svg
                className="mb-1.5"
                width="8"
                height="11"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className="flex gap-4 mt-8 flex-col md:flex-row">
              <QuarterBox
                title={selectedItemData?.quarters[0].header}
                paragraph={selectedItemData?.quarters[0].description}
                num={selectedItemData?.quarters[0].number}
                haveBorder={false}
              />
              <QuarterBox
                title={selectedItemData?.quarters[1].header}
                paragraph={selectedItemData?.quarters[1].description}
                num={selectedItemData?.quarters[1].number}
                haveBorder={false}
              />
            </div>
          </div>

          {/* content right */}
          <div className="px-4 py-6 space-y-4 basis-4/12">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => setSelectedItem(item.slug)}
                    className="flex space-x-3  group cursor-pointer"
                  >
                    <div>
                      <div className="w-24 h-24 object-cover rounded-md">
                        {" "}
                        <Image src={item.image} alt={item.header} />{" "}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-teal-700 text-14 font-medium">
                        Specialized Program
                      </h4>
                      <h3 className="text-16 xs:text-18 font-bold text-black ">
                        {item.header}{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="border-b border-slate-200 mt-space mb-space"></div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="h-screen"></div> */}
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
