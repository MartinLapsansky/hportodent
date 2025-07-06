import { useInView } from "react-intersection-observer";
import mouthImage from "../images/mouth.png";
import aboutImage from "../images/kreslo_dentist.png";

const AboutSection = () => {
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="flex flex-col text-center bg-[#f8f9fa] rounded-[20px] justify-center items-center p-12">

            {/* Title - slide from top */}
            <h2
                ref={titleRef}
                className={`text-[2.5rem] mb-10 text-white bg-[#0c7cd1] w-fit rounded-[15px] border-4 border-black px-8 py-5 font-bold transition-all duration-1000 ease-out transform ${
                    titleInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
                }`}
            >
                O nás
            </h2>

            <div className="flex justify-center flex-row gap-10 max-w-[90%] text-left mt-5 mb-5 flex-wrap">

                {/* Text - slide from left */}
                <div
                    ref={textRef}
                    className={`flex max-w-[50%] flex-col justify-center items-center transition-all duration-1000 ease-out transform ${
                        textInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
                    }`}
                >
                    <div className="min-w-[300px] text-center text-[1.1rem] leading-relaxed bg-[#d6ecfd] p-5 rounded-[20px] border border-black font-bold">
                        <p className="text-black text-[1.2rem] font-bold">
                            Čeľustný ortopéd a stomatológ <span className="text-[#0c7cd1] font-bold">MUDr. Hudák Peter</span>, poskytuje komplexnú čeľustnoortopedickú
                            a stomatologickú starostlivosť v oblasti{" "}
                            <span className="text-[#0c7cd1] font-bold">
                ortodoncie, konzervačnej, rekonštrukčnej, estetickej, protetickej a chirurgickej stomatológie
              </span>{" "}
                            s použitím štandardných a nadštandardných liečebných postupov a materiálov.
                        </p>
                    </div>

                    <div className="w-80 md:w-full mt-5">
                        <img src={mouthImage} alt="mouth" className="rounded-[20px] w-full" />
                    </div>
                </div>

                {/* Image - slide from right */}
                <div
                    ref={imageRef}
                    className={`hidden md:flex w-full flex-1 justify-center transition-all duration-1000 ease-out transform ${
                        imageInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                    }`}
                >
                    <img src={aboutImage} alt="Chair" className="w-full rounded-[20px] h-auto" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;