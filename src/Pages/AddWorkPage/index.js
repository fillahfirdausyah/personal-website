import { React, useState } from "react";
import supabaseClient from "../../api/supabaseClient";

import { useHistory } from "react-router-dom";

import AppBar from "../../Component/AppBar";
import NavbarDashboard from "../../Component/NavbarDashboard";
import Spinner from "../../Component/Spinner";

import "./style.css";

function AddWorkPage() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [workData, setWorkData] = useState({
    title: "",
    short_desc: "",
    desc: "",
    platform: "",
    stack: "",
    source: "",
    category: "",
  });
  const [cover, setCover] = useState("");

  const handleAllChange = (e) => {
    const { name, value } = e.target;
    setWorkData({
      ...workData,
      [name]: value,
    });
  };

  const handleFile = (e) => {
    setCover(e.target.files[0]);
  };

  const uploadWork = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const file = cover;
    const fileExt = cover.name.split(".").pop();
    const fileNameOrigin = cover.name.split(".")[0];
    const fileName = `${fileNameOrigin}-${Math.random()}.${fileExt}`;
    const filePath = `${workData.title}/${fileName}`;

    const { error } = await supabaseClient.storage
      .from("works-image")
      .upload(filePath, file);

    const { data } = await supabaseClient.storage
      .from("works-image")
      .getPublicUrl(filePath);

    const newWorkData = {
      ...workData,
      cover: data.publicUrl,
    };

    try {
      await supabaseClient.from("works").insert(newWorkData);
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-sm">
      <AppBar title={"Add Work"} />
      <div className="main-page-wrapper">
        <div className="add-work">
          <form>
            <div className="item-input">
              <h4>Title</h4>
              <input
                name="title"
                onChange={handleAllChange}
                value={workData.title}
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="item-input">
              <h4>Short Desc</h4>
              <textarea
                placeholder="Short Desc"
                name="short_desc"
                onChange={handleAllChange}
                value={workData.short_desc}
                type="text"
              />
            </div>
            <div className="item-input">
              <h4>Desc</h4>
              <textarea
                placeholder="Long Desc"
                name="desc"
                onChange={handleAllChange}
                value={workData.desc}
                type="text"
              />
            </div>
            <div className="row">
              <div className="col-lg-6 col-xs-6">
                <div className="item-input">
                  <h4>Platform</h4>
                  <input
                    name="platform"
                    onChange={handleAllChange}
                    value={workData.platform}
                    type="text"
                    placeholder="Platform"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xs-6">
                <div className="item-input">
                  <h4>Stack</h4>
                  <input
                    name="stack"
                    onChange={handleAllChange}
                    value={workData.stack}
                    type="text"
                    placeholder="Stack"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-xs-6">
                <div className="item-input">
                  <h4>Source</h4>
                  <input
                    name="source"
                    onChange={handleAllChange}
                    value={workData.source}
                    type="text"
                    placeholder="Source"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xs-6">
                <div className="item-input">
                  <h4>Cover</h4>
                  <input onChange={handleFile} name="cover" type="file" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-xs-12 col-md-12">
                <div className="item-input">
                  <h4>Cover</h4>
                  <select
                    name="category"
                    id="category"
                    onChange={handleAllChange}
                  >
                    <option value="*" disabled selected>
                      Select Option
                    </option>
                    <option value="web">Web App</option>
                    <option value="android">Android App</option>
                  </select>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div className="loading spinner-wrapper">
                <Spinner />
              </div>
            ) : (
              <button
                onClick={uploadWork}
                type="submit"
                className="btn btn-add-work"
              >
                Add Work
              </button>
            )}
          </form>
        </div>
      </div>
      <NavbarDashboard />
    </div>
  );
}

export default AddWorkPage;
