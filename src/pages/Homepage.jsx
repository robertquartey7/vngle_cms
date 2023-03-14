import { Grid } from "@mui/material";
import React, { useState } from "react";
import CardComp from "../components/CardComp";
import Popup from "../components/Popup/Popup";
import Search from "../components/Search/Search";

export default function Homepage() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(!visibility);
  };

  return (
    <div className="container-fluid">
      <Popup onClose={setVisibility} show={visibility}></Popup>
      <header class="header" id="header">
        <nav class="navbar container"></nav>
      </header>
      <div className="header-top">
        <h1 className="header-top-h1">
          We help harmonize cities by combatting misinformation &
          under-representation
        </h1>
        <p className="header-top-p">
          Vngle is a nonpartisan grassroots news agency bringing various angles
          of verified coverage to communities. Our creator community is powered
          by a network of local experts and change-makers working to curate
          deeper moe intimate insights on the areas around us
        </p>
      </div>
      <hr />
      <div className="search">
        <Search />
      </div>
      <div className="story-window">
        <div>
          <div
            style={{
              width: "100vw",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              alignContent={"center"}
              alignItems="center"
              className="border"
            >
              {Array.from(Array(20)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <CardComp show={popupCloseHandler} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
