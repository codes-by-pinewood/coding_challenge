import type { Startup } from "../../Types/Startup";
import React from "react";

type StartupType = {
  startup: Startup;
};

function Startupcomp(props: StartupType) {
  new Date(props.startup.dateFounded);

  return (
    <div>
      <h1>{props.startup.name}</h1>
      <p>
        Founded: {new Date(props.startup.dateFounded).getFullYear()} |{" "}
        {props.startup.employees} | {props.startup.currentInvestmentStage}
      </p>
      <h3>{props.startup.description}</h3>
    </div>
  );
}

export default Startupcomp;
