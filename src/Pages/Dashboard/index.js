import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import supbaseClinet from "../../api/supabaseClient";

import NavbarDashboard from "../../Component/NavbarDashboard";
import AppBar from "../../Component/AppBar";
import Loading from "../../Component/Loading";

import "./style.css";

function DashboardPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useLocation();
  const title = pathname.split("/");

  useEffect(() => {
    setIsLoading(true);
    const getListWork = async () => {
      const { data, error } = await supbaseClinet.from("works").select();
      setData(data);
      setIsLoading(false);
    };
    getListWork();
  }, []);

  return (
    <div className="max-w-screen-sm">
      <AppBar title={title} />
      <div className="main-page-wrapper">
        <NavbarDashboard />
        <div className="list-works-wrapper">
          {isLoading ? (
            <div className="loading">
              <Loading />
            </div>
          ) : (
            <>
              {data.map((x) => (
                <div key={x.id}>
                  <div className="list-workd-card">
                    <img src={x.cover} alt="" />
                    <div className="work-info">
                      <h3>{x.title}</h3>
                      <p>{x.short_desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
