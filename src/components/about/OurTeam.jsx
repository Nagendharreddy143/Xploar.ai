import React from "react";
import useAos from "../../hooks/useAos";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-8" data-aos="fade-up">
    <h3 className="font-poppins text-2xl lg:text-3xl font-bold text-cosmic-indigo">
      {title}
    </h3>
    {subtitle ? (
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">{subtitle}</p>
    ) : null}
  </div>
);

// Card with photo on top and text at bottom (horizontal grid friendly)
const TeamTopCard = ({ photo, name, role, responsibilities }) => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
    data-aos="fade-up"
  >
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>

    <div className="p-6">
      <h3 className="font-space-grotesk text-xl font-bold text-cosmic-indigo">
        {name}
      </h3>
      <p className="font-poppins font-semibold text-electric-aqua mt-1 text-sm">
        {role}
      </p>
      {responsibilities?.length ? (
        <ul className="mt-3 text-card-text text-sm leading-relaxed list-disc list-inside space-y-1">
          {responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </div>
);

const ProjectsAndTasks = () => (
  <section className="mt-12" data-aos="fade-up">
    <div className="mb-4">
      <h4 className="font-poppins text-2xl font-bold text-cosmic-indigo">Current Projects & Tasks</h4>
      <div className="mt-2 h-1 w-24 rounded-full bg-electric-aqua"></div>
    </div>
    <ul className="space-y-3 text-gray-900">
      <li className="flex items-start gap-3">
        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-electric-aqua"></span>
        <div>
          <span className="font-semibold text-cosmic-indigo">AI-powered UPSC Preparation Tools</span>
          <p className="text-sm text-gray-700">Building interactive quiz & analysis modules.</p>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-electric-aqua"></span>
        <div>
          <span className="font-semibold text-cosmic-indigo">Learning Dashboard</span>
          <p className="text-sm text-gray-700">Personalized tracking system for aspirants.</p>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-electric-aqua"></span>
        <div>
          <span className="font-semibold text-cosmic-indigo">Landing Page Enhancements</span>
          <p className="text-sm text-gray-700">Improving UI, adding animations, and optimizing performance.</p>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-electric-aqua"></span>
        <div>
          <span className="font-semibold text-cosmic-indigo">Content Curation System</span>
          <p className="text-sm text-gray-700">Integrating AI summarization for study materials.</p>
        </div>
      </li>
    </ul>
  </section>
);

const OurTeam = () => {
  useAos();

  // Ordered members as requested
  const members = [
    {
      photo: "/ganesh(Growth Manger).png",
      name: "Ganesh Nayak",
      role: "Growth Manager · Data Analytics",
      responsibilities: [
        "Growth strategy & funnels",
        "Cohort analysis and insights",
        "Acquisition, activation, retention metrics",
      ],
    },
    {
      photo: "/nithin bairoju.png",
      name: "Nithin Bairoju",
      role: "Developer · Java",
      responsibilities: [
        "Backend services in Java",
        "API design & robustness",
        "Testing and CI integrations",
      ],
    },
    {
      photo: "/Nagender(Front-end developer).png",
      name: "Jeddipally Nagender",
      role: "Developer · Front-End & Automation",
      responsibilities: [
        "React UI and components",
        "Automation workflows",
        "Performance and UX optimizations",
      ],
    },
    {
      photo: "/nithin( marketing).png",
      name: "Nakshatram Nithin",
      role: "Marketing · Branding, Video Editing, Content Creation",
      responsibilities: [
        "Brand storytelling",
        "Video editing & assets",
        "Content planning & distribution",
      ],
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Team" subtitle={null} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <TeamTopCard key={`${m.name}-${idx}`} {...m} />
          ))}
        </div>

        <ProjectsAndTasks />
      </div>
    </section>
  );
};

export default OurTeam;

 
