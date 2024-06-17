"use client"

import { Button } from "@/components/button";
import { useEffect } from "react";

export default function Bats() {

  // const

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/bats");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-sm mx-auto p-2">
        <div>My bats page</div>
        <div>Lets call api :</div>
        <Button>Call API</Button>
      </div>
    </>
  );
}
