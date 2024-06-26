import React from "react";

const User = ({ img, name, hobbies, children }) => {
  return (
    <section>
      <img src={img} alt={img} />
      <h1>Name: {name}</h1>
      <h3>Hobbies: {hobbies}</h3>
      {children}
    </section>
  );
};

export default User;
