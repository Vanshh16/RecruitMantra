import React from "react";
import { useNavigate } from "react-router-dom";

function LevelsSection() {

  const navigate = useNavigate();
  const levels = [
    {
      name: "Beginner",
      fee: "10 Coins",
      reward: "10-20 Coins",
      questions: "3",
      img: "assets/beginner.png",
      indicator: "assets/image2.png",
      link: "/beginner"
    },
    {
      name: "Intermediate",
      fee: "15 Coins",
      reward: "15-35 Coins",
      questions: "7",
      img: "assets/intermediate.png",
      indicator: "assets/image3.png",
      link: "/intermediate"
    },
    {
      name: "Advanced",
      fee: "25 Coins",
      reward: "25-75 Coins",
      questions: "10+",
      img: "assets/Advanced.png",
      indicator: "assets/image4.png",
      link: "/advance"
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h3 className="text-7xl text-center mb-8">Interviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-16">
          {levels.map((level, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="rounded-xl bg-orange-900">
                <img
                  className="h-60 mx-auto object-center"
                  src={level.img}
                  alt=""
                ></img>
              </div>
              <div className="py-4 px-3 mt-2 border text-left border-orange-950">
                <h4 className="text-5xl mb-4 cursor-pointer" onClick={() => navigate(level.link) }>
                  <img
                    className="h-10 inline-block"
                    src={level.indicator}
                    alt=""
                  ></img>{" "}
                  {level.name}
                </h4>
                <p className="text-3xl">Fee: {level.fee}</p>
                <p className="text-3xl">Reward: {level.reward}</p>
                <p className="text-3xl">Questions: {level.questions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LevelsSection;
