import React from "react";

const follow = (props) => (
  <div>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        padding: "0",
        marginBottom: "50px",
      }}
    >
      <li>
        <a href="www.google.com">
          <i
            className="icon-pinterest"
            style={{ fontSize: "18px", color: "#222", padding: "0 4px" }}
          />
        </a>
      </li>
      <li>
        <a href="www.google.com">
          <i
            className="icon-instagram"
            style={{ fontSize: "18px", color: "#222", padding: "0 4px" }}
          />
        </a>
      </li>
      <li>
        <a href="www.google.com">
          <i
            className="icon-facebook"
            style={{ fontSize: "18px", color: "#222", padding: "0 4px" }}
          />
        </a>
      </li>
      <li>
        <a href="www.google.com">
          <i
            className="icon-twitter"
            style={{ fontSize: "18px", color: "#222", padding: "0 4px" }}
          />
        </a>
      </li>
    </ul>
  </div>
);

export default follow;
