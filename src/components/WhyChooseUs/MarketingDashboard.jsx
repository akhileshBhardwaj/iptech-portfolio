import { motion } from "framer-motion";
import { TrendingUp, Users, MousePointerClick, DollarSign } from "lucide-react";

import DashboardGraph from "./DashboardGraph";
import DashboardStats from "./DashboardStats";
import FloatingBadge from "./FloatingBadge";

const MarketingDashboard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Background Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

      {/* Floating Badge */}

      <FloatingBadge />

      {/* Main Dashboard */}

      <div
        className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-yellow-100
        bg-white/90
        backdrop-blur-xl
        shadow-[0_30px_80px_rgba(0,0,0,.12)]
      "
      >
        {/* Header */}

        <div className="border-b border-yellow-100 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[3px] text-yellow-500">
                Performance
              </p>

              <h2 className="mt-2 text-lg font-normal  lg:text-3xl lg:font-bold text-gray-900">
                Marketing Dashboard
              </h2>
            </div>

            <div className="rounded-2xl bg-yellow-100 p-4">
              <TrendingUp size={32} className="text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Graph */}

        <div className="p-8">
          <DashboardGraph />
        </div>

        {/* Bottom Cards */}

        <div className="grid gap-6 border-t border-yellow-100 p-8 sm:grid-cols-2">
          <DashboardStats icon={Users} value="500+" title="Happy Clients" />

          <DashboardStats
            icon={MousePointerClick}
            value="18M"
            title="Ad Clicks"
          />

          <DashboardStats
            icon={DollarSign}
            value="$2.8M"
            title="Revenue Generated"
          />

          <DashboardStats icon={TrendingUp} value="+320%" title="ROI Growth" />
        </div>
      </div>
    </motion.div>
  );
};

export default MarketingDashboard;
