import { ReactElement, useEffect, useState } from "react";
import { countHashKeysPrizePools } from "../Utilities/common";
import Prizepools from "../Components/Charts/Prizepools";
import OpponentCountries from "../Components/Charts/OpponentCountries";
import FinishPositions from "../Components/Charts/FinishPositions";
export interface PrizePoolsProps {
  "$10.00"?: number;
  "$15.00"?: number;
  "$25.00"?: number;
}

const AnalysisPage = (): ReactElement => {
  const [prizePools, setPrizepools] = useState<PrizePoolsProps>();
  const [finishPositions, setFinishPositions] = useState<{
    [key: string]: number;
  }>({});
  const [opponentCountries, setOpponentCountries] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        setPrizepools(countHashKeysPrizePools(data, "prizePool"));
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
      {prizePools ? <Prizepools data={prizePools} /> : <></>}
      <FinishPositions data={finishPositions} />
      <OpponentCountries data={opponentCountries} />
    </div>
  );
};

export default AnalysisPage;
