import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

import supabaseClient from "../../api/supabaseClient";

import Navbar from "../../Component/Navbar/Navbar";
import WorksInfo from "../../Component/WorksInfo";
import Footer from "../../Component/Footer";

import Wecan from "../../Assets/works/wecan.png";

import "./style.css";

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
      <div className="home-container">
        <div className="detail-works-wrapper">
          <img src={data[0].cover} alt="" />
          <div className="breadcrumbs">
            <a href="/works">
              <h4>Works</h4>
            </a>
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
            <img className="photo-detail-works" src={Wecan} alt="" />
            <img className="photo-detail-works" src={Wecan} alt="" />
            <img className="photo-detail-works" src={Wecan} alt="" />
            <img className="photo-detail-works" src={Wecan} alt="" />
            <img className="photo-detail-works" src={Wecan} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DetailWorksPage;