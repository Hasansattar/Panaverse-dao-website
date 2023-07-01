import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";

const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II ",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTracks = () => {
  return (
    <section className="mt-16 lg:mt-28 overflow-hidden">
      <div className="absolute left-0 hidden sm:block  ">
        <div className="blur-[150px] -z-20 bg-[#05c19cb3] w-64 h-64 rounded-full "></div>
      </div>

      <Wrapper>
        {/* content */}

        <div className="max-w-screen-sm">
          <h4 className="text-teal-700 font-bold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-3xl font-bold whitespace-pre-line leading-8 text-black">
            Core Courses <br /> (Common in All Specializations):
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-[30px] max-w-xl ">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-4">
            <Button text="Enroll Now" />
          </div>
        </div>
        {/* boxes */}
        <div className="flex flex-col justify-center md:flex-row gap-y-4 items-stretch my-20 gap-x-4 max-w-screen-xl mx-auto">
          {CoreTrackData.map((item, index) => (
            <QuarterBox
            key={index}
              title={item.header}
              paragraph={item.description}
              num={item.number}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
