/* eslint-disable no-unused-vars */
import React from "react";

const SessionSingleForUser = ({ session }) => {
  const { userEmail } = session;
  console.log(session)
  return (
    <form>
      <h1>{userEmail}</h1>
    </form>
  );
};

export default SessionSingleForUser;
