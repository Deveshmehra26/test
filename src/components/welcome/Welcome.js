import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Spline from '../../spline.png';
import Basiccol from '../../basiccol.png';
import Basicgraph from '../../basicgraph.png';
import Drilldown from '../../drilldown.png';
import Pie from '../../pie.png';

export const Welcome = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("bar page");
    navigate("/bar");
  };
  const navigate1 = useNavigate();
  const spline = () => {
    console.log("spline page");
    navigate1("/spline");
  };
  const navigate2 = useNavigate();
  const basic = () => {
    console.log("basic page");
    navigate2("/basic");
  };
  const navigate3 = useNavigate();
  const drilldown = () => {
    console.log("drilldown page");
    navigate3("/drilldown");
  };
  const navigate4 = useNavigate();
  const pie = () => {
    console.log("pie page");
    navigate4("/pie");
  };
  return (
    <div className="m-5 p-5 text-center">
      {/* <img src="{ logo }" /> */}
      <CardGroup>
        <Card className="pt-4">
          <Card.Img variant="top" src={Basicgraph} />
          <Card.Body>
            <Card.Title>Basic line</Card.Title>
            <button type="button" onClick={() => handleSubmit()}>Check it</button>
          </Card.Body>
        </Card>

        <Card className="pt-4">
          <Card.Img variant="top" src={Spline} />
          <Card.Body>
            <Card.Title>Spline with symbols</Card.Title>
            <button onClick={() => spline()}>Check it</button>
          </Card.Body>
        </Card>

        <Card className="pt-4">
          <Card.Img variant="top" src={Basiccol} />
          <Card.Body>
            <Card.Title>Basic column</Card.Title>
            <button onClick={() => basic()}>Check it</button>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup className="my-5">
        <Card className="pt-4">
          <Card.Img variant="top" src={Drilldown} />
          <Card.Body>
            <Card.Title>Column with drilldown</Card.Title>
            <button onClick={() => drilldown()}>Check it</button>
          </Card.Body>
        </Card>

        <Card className="pt-4">
          <Card.Img variant="top" src={Pie} />
          <Card.Body>
            <Card.Title>Pie chart</Card.Title>
            <button onClick={() => pie()}>Check it</button>
          </Card.Body>
        </Card>

        
      </CardGroup>

    </div>
  );
};
