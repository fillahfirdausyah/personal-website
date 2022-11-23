import { React, useEffect, useState } from "react";

import supabaseClient from "../../api/supabaseClient";

import Navbar from "../../Component/Navbar/Navbar";
import WorksCard from "../../Component/WorksCard";
import Footer from "../../Component/Footer";
import Loading from "../../Component/Loading";

import "./style.css";

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
      <div className="home-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          deserunt dolorum facere.
        </p>
        <div className="works-section-wrapper">
          <h3 className="section-title">Portfolio</h3>
          {isLoading ? (
            <div className="loading">
              <Loading />
            </div>
          ) : (
            <div className="list-works row">
              {data.map((x) => (
                <div key={x.id}>
                  <WorksCard
                    cover={x.cover}
                    title={x.title}
                    description={x.short_desc}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WorksPage;
