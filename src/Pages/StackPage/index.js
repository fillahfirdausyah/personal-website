import React from "react";

import Navbar from "../../Component/Navbar/Navbar";
import StackItem from "../../Component/StackItem";

import ReactIcon from "../../Assets/stack/react.png";
import NodeIcon from "../../Assets/stack/node.png";
import LaravelIcon from "../../Assets/stack/laravel.png";
import ExpressIcon from "../../Assets/stack/express.png";

import KotlinIcon from "../../Assets/stack/kotlin.png";

import MysqlIcon from "../../Assets/stack/mysql.png";
import PostgresqlIcon from "../../Assets/stack/postgresql.png";
import MongodbIcon from "../../Assets/stack/mongodb.png";
import FirebaseIcon from "../../Assets/stack/firebase.png";

import "./style.css";
import Footer from "../../Component/Footer";
import FadeIn from "react-fade-in/lib/FadeIn";

function StackPage() {
  return (
    <>
      <Navbar />
      <div className="main-page-wrapper">
        <FadeIn>
          <div className="stack-section">
            <h3 className="section-title">Web</h3>
            <div className="stack-item-section row">
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={ReactIcon}
                title="ReactJS"
              />
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={NodeIcon}
                title="NodeJS"
              />
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={ExpressIcon}
                title="ExpressJS"
              />
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={LaravelIcon}
                title="Laravel"
              />
            </div>
          </div>
          <div className="stack-section">
            <h3 className="section-title">Android</h3>
            <div className="stack-item-section row">
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={KotlinIcon}
                title="Kotlin"
              />
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={ReactIcon}
                title="React Native"
              />
            </div>
          </div>
          <div className="stack-section">
            <h3 className="section-title">Database / Cloud Service</h3>
            <div className="stack-item-section row">
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={MysqlIcon}
                title="MySQL"
              />
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={PostgresqlIcon}
                title="PostgreSQL"
              />
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={MongodbIcon}
                title="MongoDB"
              />
              <StackItem
                className="stack-item col-lg-3 col-md-3 col-sm-6 col-xs-6"
                icon={FirebaseIcon}
                title="Firebase"
              />
            </div>
          </div>
        </FadeIn>
        <Footer />
      </div>
    </>
  );
}

export default StackPage;
