import { motion } from "framer-motion";
import { metrics } from "../../data/resume";

export function ImpactMetrics() {
  return (
    <div className="metric-rail" aria-label="Career impact metrics">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.label}
            className="metric-tile"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Icon size={18} aria-hidden="true" />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
