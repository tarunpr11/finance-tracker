import React from "react";
import Image from "next/image";
import {
  BackgroundGradientAnimation,
  ContainerScroll,
} from "../../components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <BackgroundGradientAnimation>
          <div class="flex items-center justify-center h-screen flex-col">
            <div>
            <h1 class="text-6xl font-bold">Be smart. Manage your finances </h1>
            </div>
            <div class="py-5">
              <h1 class="text-6xl font-bold text-yellow-100">BetaSid Finance</h1>            
            </div>
          </div>
          <div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </section>
  );
}

export default Hero;
