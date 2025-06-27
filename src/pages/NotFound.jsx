import React from "react";
import { NotFoundAnimation } from "../components/animations/NotFound404";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const NotFound = () => {
  const { pathname, search } = useLocation();
  const canonical = `https://www.encurage.app${pathname}${search}`;

  return (
    <>
      <Helmet>
        <title>Page not found | Encurage</title>
        <meta
          name="description"
          content="Encurage is a unique kids health management and medicine reminder app, created especially for parents and caregivers"
        />
        <meta property="og:title" content="Encurage – Child Health Tracker" />
        <meta
          property="og:description"
          content="Encurage is a unique kids health management and medicine reminder app, created especially for parents and caregivers"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta property="og:url" content="https://encurage.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Encurage – Child Health & Medication Tracker"
        />
        <meta
          name="twitter:description"
          content="Manage and track your child's health with Encurage, a unique kids health management app."
        />
        <meta
          name="twitter:image"
          content="http://www.encurage.app/static/media/Layer_1.d871b316b4549478f451.png"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main>
        <div className="nf-main">
          <NotFoundAnimation />
        </div>
      </main>
    </>
  );
};
