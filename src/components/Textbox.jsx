"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import PageHeading from "@/components/ui/pageHeading"; // make sure this path is correct

const Textbox = ({ data }) => {
  return (
    <section
      className="container bordered-3 mb-5"
      style={{ marginTop: "30px" }}
    >
      <div
        className="row mb-2"
        style={{
          textAlign: "justify",
          border: "2px solid #DCDCE4",
          backgroundColor: "#F6F6F9",
        }}
      >
        <div className="col-md-12 mb-4 pt-2">
          <PageHeading heading={data.title} icon="" show={true} />
        </div>

        <div className="col-md-12">
          <ReactMarkdown>{data.text}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Textbox;
