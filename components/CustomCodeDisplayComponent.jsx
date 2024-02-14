"use client";

import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import DataTable from "./CustomDataTable";
import StripedDataTable from "./CustomStripedDataTable";
import FilterDataTable from "./CustomFilterDataTable";
import DeleteDataTable from "./CustomDeleteDataTable";
import SortingDataTable from "./CustomSortingDataTable";
import NavigationMenu from "./CustomNavigationMenu";
import FAQ from "./CustomFAQ";
import HeaderCircular from "./CustomHeaderCircular";
import HeroSection from "./CustomHeroSection";

const CodeDisplayComponent = ({ componentName }) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [code, setCode] = useState("");

  useEffect(() => {
    console.log("componentName:", componentName);
    const componentFile = `Custom${componentName}.js`;

    if (
      ![
        "StripedDataTable",
        "DataTable",
        "FilterDataTable",
        "DeleteDataTable",
        "SortingDataTable",
        "NavigationMenu",
        "FAQ",
        "HeaderCircular",
        "HeroSection",
      ].includes(componentName)
    ) {
      console.error("Invalid component name:", componentName);
      setCode("");
      return;
    }

    import(`!!raw-loader!./${componentFile}`)
      .then((module) => {
        setCode(module.default);
      })
      .catch((e) => console.error("Error loading component:", e));
  }, [componentName]);

  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  const renderComponent = () => {
    switch (componentName) {
      case "DataTable":
        return <DataTable />;
      case "StripedDataTable":
        return <StripedDataTable />;
      case "FilterDataTable":
        return <FilterDataTable />;
      case "DeleteDataTable":
        return <DeleteDataTable />;
      case "SortingDataTable":
        return <SortingDataTable />;
      case "NavigationMenu":
        return <NavigationMenu />;
      case "FAQ":
        return <FAQ />;
      case "HeaderCircular":
        return <HeaderCircular />;
      case "HeroSection":
        return <HeroSection />;
      default:
        return <p>Component not found.</p>;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">{`Custom${componentName}`}</h2>
      <div className="tab-buttons flex space-x-2 mb-4">
        <button
          onClick={toggleCodeVisibility}
          className="btn btn-primary btn-sm"
        >
          {isCodeVisible ? "Hide Code" : "Show Code"}
        </button>
      </div>
      {isCodeVisible ? (
        <SyntaxHighlighter language="javascript" style={dark}>
          {code}
        </SyntaxHighlighter>
      ) : (
        renderComponent()
      )}
    </div>
  );
};

export default CodeDisplayComponent;
