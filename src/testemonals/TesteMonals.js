import React from "react";
import Image1 from "./img/testimonials-1.jpg";
import Image2 from "./img/testimonials-2.jpg";
import Image3 from "./img/testimonials-3.jpg";
import "./TesteMonals.css";

function TesteMonals() {
  return (
    <>
      <div className="person">
        <div className="create">
          <h2 className="lists">Testimonials</h2>
          <p className="listone">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="new-block">
          <div className="new1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae est praesentium eum facere facilis accusamus nostrum?
              Deleniti dicta friend
            </p>
          </div>
          <div className="new1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae est praesentium eum facere facilis accusamus nostrum?
            Deleniti dicta friend
            </p>
          </div>
          <div className="new1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae est praesentium eum facere facilis accusamus nostrum?
            Deleniti dicta friend
            </p>
          </div>
        </div>
        <div className="avatar">
            <div className="user1">
                <img className="saul" src={Image1} alt="" />
                <h3 className="title">Saul Goodman</h3>
                <p className="title1">Ceo  & Founder</p>
            </div>
            <div className="user1">
                <img src={Image2} alt="" />
                <h3 className="title">Sara wilsson</h3>
                <p className="title1">Designer</p>
            </div>
            <div className="user1">
                <img src={Image3} alt="" />
                <h3 className="title">Jena Carls</h3>
                <p className="title1">Store Owner</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default TesteMonals;
