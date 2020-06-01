import React from "react";
import { withRouter } from "react-router-dom";
import { RenderStarshipDetail } from "../../SwService";

import "./StarPage.css";

const StarPage = (props) => {
  const { match } = props;
  const { id } = match.params;
  return <RenderStarshipDetail itemid={id} />;
};

export default withRouter(StarPage);
