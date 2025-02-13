import React from "react";
import cardData from "../data/CardContent";

const KnowMore = () => {
    return (
        <div className="bg-[#0D0F1F] text-[#E0E0E0]">
            <section className="py-12 px-6 sm:px-10">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-12 text-center">
                    Automate Your Token Swaps with{" "}
                    <span className="relative inline-block">
                        <span className="text-transparent bg-gradient-to-r from-[#00F5A0] to-[#5DE2C1] bg-clip-text">
                            rebalancr
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00F5A0]"></span>
                    </span>
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#1E232D] p-6 shadow-lg hover:scale-105 cursor-pointer transform transition-all duration-300 flex-1 min-w-[250px] max-w-[350px] w-full sm:w-auto"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#00F5A0]">{card.title}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-left">
                                {card.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#00F5A0] text-[#0D0F1F] px-8 py-4 font-semibold transition-all duration-200 transform hover:scale-110 hover:bg-[#00D495] cursor-pointer">
                            Get Started
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default KnowMore;