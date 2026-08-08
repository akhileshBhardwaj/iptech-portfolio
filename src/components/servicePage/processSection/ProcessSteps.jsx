import React from "react";
import { processData } from "./processData";
import ProcessStep from "./ProcessStep";

const ProcessSteps = () => {
  return (
    <div className="relative flex flex-col items-start gap-10 sm:flex-row sm:items-start sm:gap-2">
      {/* Connecting dotted line (desktop only) */}
      <div className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-amber-200 sm:block" />

      {processData.map((step, index) => (
        <ProcessStep key={step.number} {...step} index={index} />
      ))}
    </div>
  );
};

export default ProcessSteps;
