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

function StackPage() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <p>These are some of the Tech Stacks that I use</p>
        <div className="stack-section">
          <h3 className="section-title">Web</h3>
          <div className="stack-item-section">
            <StackItem icon={ReactIcon} title="ReactJS" />
            <StackItem icon={NodeIcon} title="NodeJS" />
            <StackItem icon={ExpressIcon} title="ExpressJS" />
            <StackItem icon={LaravelIcon} title="Laravel" />
          </div>
        </div>
        <div className="stack-section">
          <h3 className="section-title">Android</h3>
          <div className="stack-item-section">
            <StackItem icon={KotlinIcon} title="Kotlin" />
            <StackItem icon={ReactIcon} title="React Native" />
            <StackItem />
            <StackItem />
          </div>
        </div>
        <div className="stack-section">
          <h3 className="section-title">Database / Cloud Service</h3>
          <div className="stack-item-section">
            <StackItem icon={MysqlIcon} title="MySQL" />
            <StackItem icon={PostgresqlIcon} title="PostgreSQL" />
            <StackItem icon={MongodbIcon} title="MongoDB" />
            <StackItem icon={FirebaseIcon} title="Firebase" />
          </div>
        </div>
      </div>
    </>
  );
}

export default StackPage;
