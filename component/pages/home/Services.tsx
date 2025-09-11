import Image from "next/image";

interface ServicesContent {
  img: string;
  title: string;
  desc: string;
}
const service: ServicesContent[] = [
  {
    img: "/img/contractor.png",
    title: "1Corporate Responsibility",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
  },
  {
    img: "/img/contractor.png",
    title: "2Corporate Responsibility",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
  },
  {
    img: "/img/contractor.png",
    title: "3Corporate Responsibility",
    desc: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
  },
];
export default function Services() {
  return (
    <section className="relative w-full py-24 md:pt-50 md:pb-30 rounded-4xl  bg-white  z-1 -mt-16 px-4">
      <div className="relative grid grid-cols-1 md:grid-cols-[40%_55%] max-w-6xl mx-auto  gap-16  ">
        <div
          className="relative w-full min-h-[400px] sm:h-full rounded-4xl  mx-auto overflow-hidden"
          style={{
            backgroundImage: "url('/img/service left img.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
            backgroundBlendMode: "multiply",
            clipPath: `polygon(71% 0, 71% 8%, 100% 8% , 100% 100%, 0 100%, 0 0) `,
            
          }}
        >

      
        </div>

        {/* <Image src="/img/service left img.jpg" alt="" width={500} height={300} className="object-cover object-center rounded-2xl" /> */}

        <div className="flex flex-col gap-6">
          <h2
            className="text-5xl  md:text-[70px] font-[700] text-[var(--black )] leading-[1.1]"
            style={{ fontFamily: "var(--font-involve)" }}
          >
            What makes us different
          </h2>
          <p
            className="text-[18px] font-[400] text-[var(--text)]"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
            It’s not just about creating something good; it’s about designing,
            innovating, and collaborating to forge remarkable and unparalleled
            experiences.
          </p>
          <div className="flex flex-col">
            {service.map((data, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[42%_55%] gap-6 items-center py-8 border-t border-[var(--border)]"
              >
                <div className="flex flex-row gap-10 items-center">
                  <div className="p-5 bg-[var(--primary)] flex flex-col items-center justify-center rounded-full">
                    <Image src={data.img} alt="" width={50} height={50} />
                  </div>
                  <h6
                    className="text-[var(--black)] text-xl font-semibold"
                    // style={{ fontFamily: "var(--font-involve)", }}
                  >
                    {data.title}{" "}
                  </h6>
                </div>
                <div>
                  <p
                    className="text-[18px] px-10 font-[400] text-[var(--text_light)] leading-[1.2]"
                    style={{ fontFamily: "var(--font-switzer)" }}
                  >
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
