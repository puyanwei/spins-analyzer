import { FC } from "react";
import { useHistory } from "react-router-dom";
import Dropzone from "../Components/Dropzone";

const HomePage: FC = (): JSX.Element => {
  const history = useHistory();
  return (
    <div>
      <h1>Spins Analyzer</h1>
      <Dropzone />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => history.push("/analysis")}>Go to Analysis</button>
    </div>
  );
};

export default HomePage;
