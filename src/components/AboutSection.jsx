import imageOfMe from "../images/image-of-me-nature-v2.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[60px] flex flex-col justify-center w-full min-h-screen bg-grey mx-auto pt-10 pb-20"
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <div className="mx-auto w-full max-w-[1112px]">
        <div className="bg-mint flex flex-row sm:px-5 p-10 mx-4 sm:mx-5 md:mx-0 rounded-xs shadow-xs">
          <div className="md:flex-4/12 hidden sm:flex sm:min-h-[500px] ">
            <img
              src={imageOfMe}
              alt="Profile"
              className="object-cover sm:object-[80%] md:object-right rounded-xs h-full w-full"
            ></img>
          </div>
          <div className="pl-4 md:px-5 md:flex-8/12 sm:max-w-[350px] md:max-w-none text-sm">
            <h2 className="text-3xl font-headings font-black mb-4 mx-auto tracking-tight">
              About Me
            </h2>
            <h3 className="font-headings font-bold text-lg">Background</h3>
            <p className="mb-4">
              I have been a teacher for 8th-10th grade students since 2011, with a degree in
              education and additional specialization in mathematics. During the COVID-19 pandemic,
              I decided to explore a new career path. Being a creative person with a passion for
              design and colors, combined with my logical thinking and problem-solving skills from
              mathematics, I discovered frontend development as an exciting direction. Since then, I
              have been fully committed to this journey. When working on my projects, time flies,
              and I feel immense satisfaction when the "code works." I am structured,
              detail-oriented, and enjoy collaborating with others, but I am also capable of working
              independently.
            </p>
            <h3 className="font-headings font-bold text-lg">Skills</h3>
            <p className="mb-4">
              I have completed a two-year education in frontend development at Noroff School of
              Technology and Digital Media. During my studies, I gained knowledge and experience in
              areas such as:
            </p>
            <ul className="list-inside mb-4">
              <li>
                <span className="font-semibold">Design:</span> Creating user-friendly and visually
                appealing designs using tools like Adobe XD.
              </li>
              <li>
                <span className="font-semibold">HTML, CSS, and JavaScript:</span> Building
                responsive and functional websites.
              </li>
              <li>
                <span className="font-semibold">Frameworks: </span>Experience with Tailwind CSS,
                Bootstrap, and React.
              </li>
              <span className="font-semibold">Version Control:</span> Familiar with Git and GitHub,
              including creating branches, pushing changes, and merging code.
              <li>
                <span className="font-semibold">Agile Methodologies:</span>I have some familiarity
                with Agile methodologies, such as breaking down tasks into smaller deliverables and
                using tools like Trello or GitHub Projects. I am eager to deepen my knowledge and
                gain more hands-on experience with these practices in the near future.
              </li>
            </ul>
            <p className="mb-4">
              I am also motivated to gain experience with{" "}
              <span className="font-semibold">TypeScript</span>, as it is something I have not
              prioritized in my current projects but am eager to explore further.{" "}
            </p>

            <h3 className="font-headings font-bold text-lg">Interests</h3>
            <p>
              In my free time, I enjoy strength training, running, exploring nutrition and cooking,
              travelling, and spending time outdoors. I also value personal development and enjoy
              being social. I am now looking forward to finding a relevant job where I can apply my
              skills and grow as a frontend developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
