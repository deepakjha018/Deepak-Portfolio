import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution:
      "Arya College of Engineering and Information Technology",
    location: "Jaipur, Rajasthan",
    affiliation:
      "Affiliated to Rajasthan Technical University (RTU), Kota",
    duration: "2023 – Present",
    result: "CGPA: 9.1 / 10",
  },
  {
    degree: "Senior Secondary — Class XII",
    institution:
      "Govt. Boys Senior Secondary School No. 2",
    location: "Roop Nagar, Delhi",
    affiliation: "CBSE Board",
    duration: "2022",
    result: "82%",
  },
  {
    degree: "Secondary — Class X",
    institution:
      "Govt. Boys Senior Secondary School No. 2",
    location: "Roop Nagar, Delhi",
    affiliation: "CBSE Board",
    duration: "2020",
    result: "76%",
  },
];

function Education() {
  return (
    <section id="education" className="py-24">
      <Container>
        <SectionTitle title="Academic Journey" />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-12">
          My academic background and educational milestones.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="h-full relative overflow-hidden group">
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-blue-400" />
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-blue-400 text-sm mt-3 leading-relaxed">
                    {item.institution}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-5">
                    <CalendarDays className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-3">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>

                  {/* Affiliation */}
                  <p className="text-sm text-gray-400 mt-5 leading-relaxed">
                    {item.affiliation}
                  </p>

                  {/* Result */}
                  <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/10">
                    <Award className="w-5 h-5 text-blue-400" />

                    <span className="text-white font-medium">
                      {item.result}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;