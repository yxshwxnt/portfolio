import React from "react";
import { Box } from "@mui/material";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Box className="main-box">
        <h1>Portfolio</h1>
        <div className="bluehr"></div>
        {/* <hr />   */}
        <div className="container">
          <ul>
            {/* Project 1 */}
            <li class="project">
              <div className="image">
                <img src="./landing.png" alt="temp" className="landing-img" />
              </div>
              <div className="desc">
                <h3>Chat App</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laboriosam, nemo similique enim placeat ab id eaque distinctio
                  suscipit, iste numquam necessitatibus quia velit consequatur?
                </p>
              </div>
            </li>
            {/* Project 2 */}
            <li class="project">
              <div className="desc">
                <h3>FIFA World Cup News</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laboriosam, nemo similique enim placeat ab id eaque distinctio
                  suscipit, iste numquam necessitatibus quia velit consequatur?
                </p>
              </div>
              <div className="image">
                <img src="./wc22.png" alt="temp" className="wc22" />
              </div>
            </li>
            {/* Project 3 */}
            <li class="project">
              <div className="image">
                <img src="./inote.png" alt="temp" className="inote"/>
              </div>
              <div className="desc">
                <h3>iNotebook</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laboriosam, nemo similique enim placeat ab id eaque distinctio
                  suscipit, iste numquam necessitatibus quia velit consequatur?
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Box>
    </>
  );
};

export default Portfolio;
