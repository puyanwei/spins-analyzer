import { FC, useEffect, useState } from "react";
import { countHashKeys } from "../Utilities/common";
import Prizepools from "../Components/Charts/Prizepools";
import OpponentCountries from "../Components/Charts/OpponentCountries";
import FinishPositions from "../Components/Charts/FinishPositions";

const AnalysisPage: FC = (): JSX.Element => {
  const [prizePools, setPrizepools] = useState({});
  const [finishPositions, setFinishPositions] = useState({});
  const [opponentCountries, setOpponentCountries] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        setPrizepools(countHashKeys(data, "prizePool"));
        setFinishPositions(countHashKeys(data, "result"));
        setOpponentCountries({
          ...countHashKeys(data, "firstCountry"),
          ...countHashKeys(data, "secondCountry"),
          ...countHashKeys(data, "thirdCountry"),
        });
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Analysis Page</h1>
      <Prizepools data={prizePools} />
      <FinishPositions data={finishPositions} />
      <OpponentCountries data={opponentCountries} />
    </div>
  );
};

export default AnalysisPage;
