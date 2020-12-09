import React from "react";
import "./App.css";
import Panel from "nav-frontend-paneler";
import { Systemtittel } from "nav-frontend-typografi";
import { useQuery } from "react-query";

const fetchNavn = async () => {
  const url = `https://www.dev.nav.no/person/dittnav-api/personalia/navn`;
  const response = await fetch(url);

  return response.json();
};

function App() {
  const { status, data } = useQuery("navn", fetchNavn);

  if (status === "loading") {
    return null;
  }

  return (
    <div className="podlet-dittnav">
      <Panel border>
        <Systemtittel>{data}</Systemtittel>
      </Panel>
    </div>
  );
}

export default App;
