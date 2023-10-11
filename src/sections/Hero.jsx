import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <section className="w-full min-h-screen flex flex-col xl:flex-row max-container justify-center gap-10">
            <div className="relative xl:w-2/5 flex flex-col w-full justify-center items-start max-xl:padding-x pt-28">
                <p className="text-xl text-coral-red font-montserrat">
                    Our Summer Collection
                </p>
                <h1 className="text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap z-10 relative pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-coral-red mt-3 inline-block">
                        Nike
                    </span>{" "}
                    <span>Shoes</span>
                </h1>
                <p className="font-montserrat mt-6 mb-14 sm:max-w-sm text-lg leading-8 text-slate-gray">
                    Discover stylish Nike arrivals, quality comfort and
                    innovation for your active life.
                </p>
                <Button label="Shop now" iconUrl={arrowRight} />
                <div className="flex justify-start items-start flex-wrap mt-20 w-full gap-16">
                    {statistics?.map((stat, index) => (
                        <div key={index}>
                            <p className="font-palanquin text-4xl font-bold">
                                {stat?.value}
                            </p>
                            <p className="font-montserrat leading-7 text-slate-gray">
                                {stat?.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center">
                <img
                    src={bigShoeImg}
                    alt="Shoe Collection"
                    width={610}
                    height={500}
                    className="z-10 object-contain relative"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes?.map((shoe) => (
                        <div key={shoe.thumbnail}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigImg={setBigShoeImg}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
