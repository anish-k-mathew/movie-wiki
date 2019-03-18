import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-light text-center">
        <h1 className="display-4  text-danger">MovieWiki</h1>
        <p className="lead text-black m-3">
          Lorem ipsum guys! This site is still in development but i'm glad to
          have it up!! You can currently search for a movie by clicking on the
          Movie link up in the Top Navigation. Although, the results do come up,
          i'm still working on the details and searching by different options. A
          lot more to come!!
        </p>

        <p>
          Possimus doloremque maxime ut ullam sunt eveniet quo harum inventore.
          Culpa labore similique voluptate excepturi suscipit aliquam dicta eum
          voluptates tempora consequatur.
        </p>
        <hr />
        <p className="text-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni
          totam, cum vitae quaerat sunt magnam sapiente inventore expedita
          ullam.
        </p>
      </div>
    );
  }
}

export default Home;
