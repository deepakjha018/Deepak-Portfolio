import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  CalendarDays,
  Sparkles,
  Bot,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import { achievements } from "../../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <Container>
        <SectionTitle title="Beyond the Code" />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-12">
          Leadership, community involvement, and experiences beyond
          individual projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const isGDG =
              achievement.title.includes("GDG");

            return (
              <motion.div
                key={achievement.title}
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
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        {/* Achievement Icon */}
                        <div
                          className="
                            w-14
                            h-14
                            rounded-2xl
                            border
                            border-cyan-400/20
                            bg-cyan-400/5
                            flex
                            items-center
                            justify-center
                            shrink-0
                            shadow-[0_0_20px_rgba(34,211,238,.12)]
                            group-hover:border-cyan-400/40
                            group-hover:bg-cyan-400/10
                            group-hover:shadow-[0_0_25px_rgba(34,211,238,.2)]
                            transition-all
                            duration-300
                          "
                        >
                          {isGDG ? (
                            <Bot className="w-8 h-8 text-cyan-400" />
                          ) : (
                            <Trophy className="w-8 h-8 text-cyan-400" />
                          )}
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {achievement.title}
                          </h3>

                          <p className="text-blue-400 text-sm mt-1">
                            {achievement.organization}
                          </p>
                        </div>
                      </div>

                      <Trophy className="w-5 h-5 text-blue-400 shrink-0" />
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
                      <CalendarDays className="w-4 h-4" />
                      <span>{achievement.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {achievement.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {achievement.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />

                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom metadata */}
                    <div className="flex flex-wrap gap-4 mt-7 pt-5 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Users className="w-4 h-4 text-blue-400" />
                        Leadership
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Trophy className="w-4 h-4 text-blue-400" />
                        Community Impact
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Achievements;