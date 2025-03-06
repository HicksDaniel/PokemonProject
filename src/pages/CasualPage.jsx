import React, { useState } from "react";
import "./casualpage.css";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import IndexCards from "./cards/IndexCard";

function CasualPage() {
  const [header, setHeader] = useState("[PlaceHolder Footer]");
  const [footer, setFooter] = useState("[PlaceHolder Header]");
  return (
    <>
      <div className="casualpage-container">
        <div className="title-container">
          <h1 className="title">Welcome to the World of Pokemon</h1>
        </div>
        <div className="card-group-container">
          <div className="card-container"></div>

          <IndexCards />

          <div className="card-container">
            <Card
              header={footer}
              title="Advanced Card"
              subTitle="Card subtitle"
              footer={header}
              className="md:w-25rem"
            >
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default CasualPage;
