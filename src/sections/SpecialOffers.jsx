import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
    return (
        <section className="flex justify-center items-center gap-10 max-xl:flex-col-reverse max-container">
            <div>
                <img
                    src={offer}
                    alt="offer"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-1 flex-col">
                <h1 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">Special</span> Offer
                </h1>
                <p className="mt-4 lg:max-w-lg info-text">
                    Embark on a shopping journey that redefines your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Navigate a realm of possibilities designed to fulfill your
                    unique desires, surpassing the loftiest expectations. Your
                    journey with us is nothing short of exceptional.
                </p>
                <div className="mt-11 flex gap-4 flex-wrap">
                    <Button label="Shop now" iconUrl={arrowRight}/>
                    <Button label="Learn more" outLine />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
