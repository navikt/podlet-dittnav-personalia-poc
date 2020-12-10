import React from "react";
import "./App.css";
import Panel from "nav-frontend-paneler";
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
      <Panel border>
        <Sidetittel>Hei, {data!.navn}</Sidetittel>
      </Panel>
    </div>
  );
}

export default App;
