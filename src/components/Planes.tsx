import {motion} from "framer-motion";
import {useMemo} from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Event from "./Event/Event";
import Project from "./Project";
import {IEventItem, IProjectItem} from "@/data/interface";

interface IProps{
  eventTitle:string,
  eventDescription:string,
  eventItems:IEventItem[],
  projectTitle:string,
  projectDescription:string,
  projectItems:IProjectItem[]
  subscribeClick:()=>void
}

const Planes = ({
  eventTitle,
  eventDescription,
  eventItems,
  projectTitle,
  projectDescription,
  projectItems,
  subscribeClick
}:IProps) => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center" id="Project">   
        
        {/* Projects */}
        <Project projectTitle={projectTitle} projectDescription={projectDescription}  projectItems={projectItems}/>

        <div className="flex flex-col w-full my-16" id="Event">
          
          {/* Events */}
          <Event eventTitle={eventTitle} eventDescription={eventDescription} eventItems={eventItems}/> 

          {/* subscribe */}
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let s subscribe with us and find the fun.</p>
                </div>                
                <ButtonPrimary
                  type="button"
                  onClick={subscribeClick}
                >
                  MemberShip
                </ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{filter: "blur(114px)"}}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>
    </div>
  );
};

export default Planes;
