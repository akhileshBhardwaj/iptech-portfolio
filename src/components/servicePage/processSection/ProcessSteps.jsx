import React, { Fragment } from "react";
import { processData } from "./processData";
import ProcessStep from "./ProcessStep";

const Connector = () => (
  <>
    {/* Horizontal connector - desktop/tablet only, aligned to icon center (h-16 → center at 32px) */}
    <div
      className="mt-8 hidden h-0.5 flex-1 shrink border-t-2 border-dashed border-[#F5C567] sm:block"
      aria-hidden="true"
    />
    {/* Vertical connector - mobile only */}
    <div
      className="block h-8 w-0.5 border-l-2 border-dashed border-[#F5C567] sm:hidden"
      aria-hidden="true"
    />
  </>
);

const ProcessSteps = () => {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-0">
      {processData.map((step, index) => (
        <Fragment key={step.number}>
          <ProcessStep {...step} index={index} />
          {index < processData.length - 1 && <Connector />}
        </Fragment>
      ))}
    </div>
  );
};

export default ProcessSteps;