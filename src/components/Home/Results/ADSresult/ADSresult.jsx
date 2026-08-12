import React from 'react'
import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import Cards from './Cards'
import Data from './Data'
import laptopImg from '../../../../assets/images/home/laptop_ads_image.png'
import plantImg from '../../../../assets/images/home/plant_workspace_image.png'


const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const ADSresult = () => {
  return (
    <section className="w-full bg-[#FBF3E9] px-6 py-16 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - heading, copy, service cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerStagger}>
            <motion.div variants={fadeUp}>
              <p className="text-[#C1440E] font-semibold tracking-wide text-sm mb-3">OUR ADVERTISING SERVICES</p>
              <div className="w-14 h-0.75 bg-[#C1440E] rounded-full mb-6" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl leading-[1.1] font-bold text-[#1C1C1C]">
              Google Ads &amp; Meta Ads
              <br />
              <span className="relative inline-block text-[#C1440E] italic">
                that drive real results.
                <svg className="absolute left-0 -bottom-2 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <motion.path
                    d="M2 6 Q80 -2 150 6 T298 6"
                    stroke="#C1440E"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-slate-500 text-lg leading-relaxed max-w-lg">
              From strategy to execution, we run data-driven ad campaigns on Google and Meta platforms
              to help you reach the right audience, generate quality leads and maximize ROI.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 mt-8">
              <Cards.ServiceCard
                title="Google Ads"
                logo={Data.googleLogo}
                description="Reach customers actively searching for your products or services."
                items={Data.googleAdsList}
                delay={0.1}
              />
              <Cards.ServiceCard
                title="Meta Ads"
                logo={Data.metaLogo}
                description="Connect with your audience across Facebook, Instagram and more."
                items={Data.metaAdsList}
                delay={0.25}
              />
            </motion.div>
          </motion.div>

          {/* Right column - dashboard image, quote card, lifestyle image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="sm:col-span-2 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Replace with your own laptop / dashboard image */}
              <img
                src={laptopImg}
                alt="Campaign performance dashboard on laptop"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-[#3C4023] rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5"
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                >
                  <Target className="w-6 h-6 text-[#C1440E]" />
                </motion.div>
                <h3 className="text-white text-xl font-serif font-semibold leading-snug mb-3">
                  Smarter campaigns.
                  <br />
                  Better results.
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We combine creativity, targeting and analytics to grow your business faster.
                </p>
              </div>
              <div className="w-10 h-0.75 bg-[#C1440E] rounded-full mt-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              {/* Replace with your own lifestyle image */}
              <img src={plantImg} alt="Plant and books on a desk" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
          className="mt-14 bg-white/60 border border-black/5 rounded-2xl px-6 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {Data.statsData.map((s) => (
            <Cards.StatCard key={s.label} icon={s.icon} bg={s.bg} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ADSresult