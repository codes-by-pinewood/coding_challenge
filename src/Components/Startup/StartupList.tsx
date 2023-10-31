import { Fragment, ReactElement, useState, useEffect } from "react";
import StartupMapper from "../../Http/Startup/Startup.mapper";
import { Startup } from "../../Types/Startup";
import Startupcomp from "./Startup";

export default function StartupList(): ReactElement {
  const [startups, setStartups] = useState<Startup[]>([]);

  const getStartups = async () => {
    const response = await fetch("/api/startups");
    const startups = await response.json();
    console.log(startups);
    setStartups(startups);

    return startups;
  };

  useEffect(() => {
    getStartups();
  }, []);

  return (
    <Fragment>
      <ul>
        {startups.length > 0 ? (
          startups.map((startup) => {
            return (
              <li key={startup.id} className="list">
                <Startupcomp startup={startup}></Startupcomp>
              </li>
            );
          })
        ) : (
          <h1>no startups</h1>
        )}
      </ul>
    </Fragment>
  );
}
