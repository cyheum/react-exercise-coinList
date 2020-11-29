import React from "react";

interface IProps {
  coinId: string | undefined;
}

const CoinDetailScreen: React.FC<IProps> = ({ coinId }) => {
  return <div>Hello World! my name is {coinId ? coinId : "not defined"}</div>;
};

export default CoinDetailScreen;
