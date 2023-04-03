import React, { useState } from "react";
import jobs from "../data/data";
import { Link } from "react-router-dom";

export const JobList = () => {
  const [jobData, setJobData] = useState(jobs);

  const [search, setSearch] = useState("");

  const [searchByLocation, setSearchByLocation] = useState("");
  const searchValueMin = search.toLowerCase();

  //El includes nos sirve con una comparacion , es decir, en vez de usar === colocamos includes() y ya el evalua las 2 variables y las compara

  const locationSearchHandler = () => {
    //En esta funcion hacemos la comparacion de una vez
    const filteredData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobData(filteredData);
  };

  const filterData = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "full-time") {
      const filterData = jobs.filter((job) => job.contract === "Full Time");
      setJobData(filterData);
    } else if (filterValue === "part-time") {
      const filterData = jobs.filter((job) => job.contract === "Part Time");
      setJobData(filterData);
    } else if (filterValue === "freelance") {
      const filterData = jobs.filter((job) => job.contract === "Freelance");
      setJobData(filterData);
    }
  };

  return (
    <section className="job_list">
      <div className="container">
        <div className="job_list_wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <input
                type="text"
                className=""
                placeholder="Busqueda"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="search__panel-02">
              <input
                type="text"
                className=""
                placeholder="Ubicacion"
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button onClick={locationSearchHandler}>Buscar</button>
            </div>

            <div className="search__panel-03">
              <select name="" id="" onChange={filterData}>
                <option value="">Buscar por trabajo por</option>
                <option value="full-time">Tiempo completo</option>
                <option value="part-time">Tiempo parcial</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>

          </div>


          <div className="jobs__wrraper">
            {jobData
              ?.filter((job) => {
                if (search === "") return job;
                if (
                  job.position.toLowerCase().includes(searchValueMin) ||
                  job.company.toLowerCase().includes(searchValueMin)
                )
                  return job;
              })
              .map((item) => (
                <div key={item.id} className="job__item">
                  <img src={item.logo} alt="" />
                  <div className="job__content">
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                    </h1>
                    <p>{item.company}</p>
                    <div className="location">
                      <p>
                        Location: <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
