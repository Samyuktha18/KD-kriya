// src/app/page.tsx
"use client";
import React from "react";

import AddAffiliations from "./components/AddAffiliations";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AddAffiliations />
    </div>
  );
}
