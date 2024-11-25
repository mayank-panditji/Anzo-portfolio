import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page5 = () => {
 
     useGSAP(function(){
        gsap.from(".rotatetex",{
            transform:'rotateX(-80deg)',
            opacity:0,
            duration:1 ,
            stagger:1,
            ScrollTrigger:{
              trigger:'.rotatetext',
              start:"top -50%",
              end:"top -400%",
              scrub:2
            }            
        })
     })
 
 
    return (
     
    <div id="section2" className="bg-white text-center text-black ">
      
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4]  leading-[35vw]  ">HELPING</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-[#9B9B9B] font-[anzo4]  leading-[35vw] ">MY</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4] leading-[35vw] ">CLIENTS</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4]  leading-[35vw] ">TO ACHIEVE</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-[#9B9B9B] font-[anzo4] leading-[35vw] ">THIER</h1>
      </div>
      <div className="rotatetex">
        <h1 className="text-[42vw] text-black font-[anzo4] leading-[35vw] ">DREAMS!</h1>
      </div>
   
    </div>
  );
};

export default Page5;
