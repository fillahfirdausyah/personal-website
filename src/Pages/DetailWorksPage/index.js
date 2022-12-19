import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

import supabaseClient from "../../api/supabaseClient";

import Navbar from "../../Component/Navbar/Navbar";
import WorksInfo from "../../Component/WorksInfo";
import Footer from "../../Component/Footer";
import Loading from "../../Component/Loading";

import "./style.css";
import FadeIn from "react-fade-in/lib/FadeIn";

function DetailWorksPage() {
  const [data, setData] = useState([
    {
      id: 0,
      title: "",
      short_desc: "",
      desc: "",
      platform: "",
      stack: "",
      source: "",
      cover: "",
      created_at: "",
      showcase: [],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getDetailWorks = async () => {
      const { data, error } = await supabaseClient
        .from("works")
        .select()
        .eq("title", id);
      setData(data);
      setIsLoading(false);
    };
    getDetailWorks();
  }, []);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="main-page-wrapper">
          <FadeIn>
            <div className="detail-works-wrapper">
              <img src={data[0].cover} alt="" />
              <div className="breadcrumbs">
                <Link to="/works">
                  <h4>Works</h4>
                </Link>
                <BiChevronRight size={24} />
                <h4>{id}</h4>
              </div>
              <div className="works-desc">
                <p>{data[0].desc}</p>
              </div>
              <div className="works-info-wrapper">
                <WorksInfo title={"Platform"} value={data[0].platform} />
                <WorksInfo title={"Stack"} value={data[0].stack} />
                <WorksInfo title={"Source"} value={data[0].source} />
              </div>
              <div className="detail-photo-works-wrapper">
                {data[0].showcase == null ? (
                  <h4 style={{ textAlign: "center" }}>
                    Showcase photo not found
                  </h4>
                ) : (
                  <>
                    {data[0].showcase.map((x, id) => (
                      <img
                        className="photo-detail-works"
                        src={x}
                        alt=""
                        key={id}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </FadeIn>
          <Footer />
        </div>
      )}
    </>
  );
}

export default DetailWorksPage;
