import React from "react";
import "./App.css";
import { Sidetittel } from "nav-frontend-typografi";
import { useQuery } from "react-query";

const fetchNavn = async () => {
  const url = `https://www.dev.nav.no/person/dittnav-api/personalia/navn`;
  const response = await fetch(url, { method: "GET", credentials: "include" });

  return response.json();
};

function App() {
  const { status, data } = useQuery("navn", fetchNavn);

  if (status === "loading") {
    return null;
  }

  return (
    <div className="podlet-dittnav-personalia">
      <Sidetittel>Hei, {data!.navn}</Sidetittel>
    </div>
  );
}

export default App;
