import React from "react";

import GoodsHeader from "../components/GoodsPage/GoodsHeader";
import GoodsAbout from "../components/GoodsPage/GoodsAbout";
import GoodsItems from "../components/GoodsPage/GoodsItems";

const GoodsPage = () => {
  const [goods, setBestsellers] = React.useState([]);

  React.useEffect(() => {
    fetch("/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setBestsellers(json.goods);
      });
  }, []);

  return (
    <>
      <GoodsHeader />
      <GoodsAbout />
      <GoodsItems goodsItem={goods} />
    </>
  );
};

export default GoodsPage;
