import { React, useEffect, useState } from "react";

import supabaseClient from "../../api/supabaseClient";

import Navbar from "../../Component/Navbar/Navbar";
import WorksCard from "../../Component/WorksCard";
import Footer from "../../Component/Footer";
import Loading from "../../Component/Loading";

import { CiFilter } from "react-icons/ci";

import "./style.css";
import FadeIn from "react-fade-in/lib/FadeIn";

function WorksPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fethcData = async () => {
      setIsLoading(true);
      const { data, error } = await supabaseClient.from("works").select();
      setData(data);
      setIsLoading(false);
    };
    fethcData();
  }, []);

  const filterData = async (category) => {
    setIsLoading(true);
    setIsVisible(false);
    if (category == "all") {
      const { data, error } = await supabaseClient.from("works").select();
      setData(data);
    } else {
      const { data, error } = await supabaseClient
        .from("works")
        .select()
        .eq("category", category);
      setData(data);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="main-page-wrapper">
        <div className="works-section-wrapper">
          <div className="top-works-section">
            <h3 className="section-title">My Works</h3>
            <div className="filter-works-wrapper">
              <div
                className="btn btn-filter"
                onClick={() => setIsVisible(!isVisible)}
              >
                <CiFilter />
              </div>
              <div
                className={
                  isVisible
                    ? "filter-value angry-animate"
                    : "filter-value appear-out"
                }
              >
                <ul>
                  <li onClick={() => filterData("all")}>All</li>
                  <li onClick={() => filterData("web")}>Web App</li>
                  <li onClick={() => filterData("android")}>Android App</li>
                </ul>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="loading">
              <Loading />
            </div>
          ) : (
            <FadeIn>
              <div className="list-works row">
                {data.map((x) => (
                  <div
                    key={x.id}
                    className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  >
                    <WorksCard
                      cover={x.cover}
                      title={x.title}
                      description={x.short_desc}
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WorksPage;
