import Image from "next/image";

interface ServicesContent {
  img: string;
  title: string;
  desc: string;
}
const service: ServicesContent[] = [
  {
    img: "/img/contractor.png",
    title: "Tender Competitiveness",
    desc: "We craft winning bids even in high-stakes, multi-crore tenders.",
  },
  {
    img: "/img/contractor.png",
    title: "Resource Efficiency",
    desc: "Optimized manpower, materials, and capital.",
  },
  {
    img: "/img/contractor.png",
    title: "Local Network Strength",
    desc: "Smooth execution via departmental coordination.",
  },
  {
    img: "/img/contractor.png",
    title: "Adaptive Expertise",
    desc: "Rapid roads & complex long-term building works.",
  },
  {
    img: "/img/contractor.png",
    title: "Specialized Retrofitting",
    desc: "Extend the life of aging infrastructure",
  },
];
export default function Services() {
  return (
    <section className="relative w-full py-24 md:pt-50 md:pb-30 rounded-4xl  bg-white  z-1 -mt-16 px-4">
      <div className="relative grid grid-cols-1 md:grid-cols-[40%_55%] max-w-6xl mx-auto  gap-16  ">
<div className="w-full min-h-[450px] sm:h-full mx-auto rounded-4xl relative">
  <div className="sticky top-[150px] ">
    <Image
      src="/img/yogesh.jpeg"
      alt=""
      width={500}
      height={200}
      className="object-cover object-top rounded-2xl brightness-75 w-full "
    />
  </div>
</div>




        <div className="flex flex-col gap-6">
          <h2
            className="text-5xl  md:text-[70px] font-[700] text-[var(--black )] leading-[1.1]"
            style={{ fontFamily: "var(--font-involve)" }}
          >
Why Choose Us          </h2>
          <p
            className="text-[18px] font-[400] text-[var(--text)]"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
Compared to large EPCs, our low overhead and regional strength add flexibility without compromising standards—especially valuable on retrofitting and time-sensitive works. (Deck includes a competitor landscape for internal reference.)          </p>
          <div className="flex flex-col">
            {service.map((data, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[42%_55%] gap-6 items-center py-6 border-t border-[var(--border)]"
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
                    className="text-[18px] px-2 sm:px-10 font-[400] text-[var(--text_light)] leading-[1.2]"
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
