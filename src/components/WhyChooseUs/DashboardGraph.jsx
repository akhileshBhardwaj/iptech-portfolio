import { motion } from "framer-motion";

const bars = [65, 120, 85, 150, 100, 170, 140];

const DashboardGraph = () => {
  return (
    <div className="space-y-10">
      {/* Top Stats */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="rounded-2xl bg-yellow-50 p-5">
          <p className="text-sm text-gray-500">Visitors</p>

          <h2 className="mt-2 text-xl font-semibold lg:text-2xl lg:font-bold">
            45K
          </h2>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-5">
          <p className="text-sm text-gray-500">Conversion</p>

          <h2 className="mt-2 text-xl font-semibold lg:text-2xl lg:font-bold">
            68%
          </h2>
        </div>
        <div className="rounded-2xl bg-yellow-50 p-5">
          <p className="text-sm text-gray-500">Revenue</p>

          <h2 className="mt-2 text-xl font-semibold lg:text-2xl lg:font-bold">
            $2.8M
          </h2>
        </div>
      </div>

      {/* SVG Line Chart */}

      <div className="relative h-56 rounded-3xl bg-linear-to-br from-yellow-50 to-white p-6">
        <svg viewBox="0 0 600 250" className="h-full w-full">
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FACC15" />

              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          <motion.path
            d="M20 190
               C90 130,
               150 160,
               220 90
               S350 70,
               430 110
               S520 30,
               580 60"
            fill="transparent"
            stroke="url(#lineGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
            }}
          />

          {[20, 220, 430, 580].map((cx, index) => (
            <motion.circle
              key={index}
              cx={cx}
              cy={[190, 90, 110, 60][index]}
              r="6"
              fill="#FACC15"
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                delay: index * 0.25,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Bar Chart */}

      <div className="flex h-44 items-end justify-between gap-3">
        {bars.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              height: 0,
            }}
            whileInView={{
              height: item,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.7,
            }}
            className="w-full rounded-full bg-linear-to-t from-yellow-500 to-yellow-300"
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardGraph;
