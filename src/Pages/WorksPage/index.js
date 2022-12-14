import { React, useEffect, useState } from "react";

import supabaseClient from "../../api/supabaseClient";

import Navbar from "../../Component/Navbar/Navbar";
import WorksCard from "../../Component/WorksCard";
import Footer from "../../Component/Footer";
import Loading from "../../Component/Loading";

import "./style.css";
import FadeIn from "react-fade-in/lib/FadeIn";

function WorksPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fethcData = async () => {
      setIsLoading(true);
      const { data, error } = await supabaseClient.from("works").select();
      setData(data);
      setIsLoading(false);
    };
    fethcData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-page-wrapper">
        <div className="works-section-wrapper">
          <h3 className="section-title">My Works</h3>
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
