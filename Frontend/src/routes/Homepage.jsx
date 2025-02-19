import React from "react";

function Homepage() {
  return (
    <div>
      This is the Homepage Template for the Hackathon Purpose
      <p className="block">
        email :{" "}
        <span className="italic text-blue-600 font-semibold">
          varunbalbudhe@gmail.com
        </span>
      </p>
      <p className="block">
        password :{" "}
        <span className="italic text-blue-600 font-semibold">varun</span>
      </p>
      <p className="block">
        paths :{" "}
        <span className="italic text-blue-600 font-semibold">
          <a href="/user/:id">/user/:id</a> protected route
        </span>
      </p>
      <p className="block">
        Functions Implemented :{" "}
        <span className="italic text-blue-600 font-semibold block">
          1. login, logout, register
        </span>
        <span className="italic text-blue-600 font-semibold block">
          2. Auth Contexts
        </span>
        <span className="italic text-blue-600 font-semibold block">
          3. Protected and Public Layouts
        </span>
      </p>
    </div>
  );
}

export default Homepage;
