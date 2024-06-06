import React from "react";
import About_map from "../temporary/about_map.png";
import Return_home_2 from "../temporary/return_home_2.png";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about_title">O projekcie</div>
      <span className="text_1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        placerat felis fermentum lorem gravida faucibus. Sed a blandit metus.
        Nullam varius efficitur nibh, sed pretium felis gravida eu. Sed semper
        lacus sed volutpat posuere. Ut ultricies non orci nec consequat.
        Suspendisse sed massa a augue viverra aliquam. Donec a mattis erat, a
        varius erat. Phasellus nisl ex, placerat id orci non, ultricies pretium
        mi. Sed non ipsum cursus, molestie nibh et, fringilla turpis. Proin
        efficitur eros at ex sagittis gravida. Mauris imperdiet tellus vitae
        commodo auctor. Mauris mauris enim, sagittis in est non, iaculis cursus
        elit. Nulla vehicula consectetur convallis. Duis euismod odio vitae
        ultrices venenatis. Proin erat quam, imperdiet vel justo et, blandit
        faucibus nulla. Aliquam erat volutpat. Sed viverra ipsum nunc, sit amet
        dignissim orci rutrum in. Morbi venenatis, metus vel mattis
        sollicitudin, erat mi tempus mi, sed porttitor dolor velit eget nisi.
        Vivamus sapien nisl, porttitor sit amet facilisis et, luctus sit amet
        nibh. Nulla facilisi. Pellentesque et convallis dui. Donec eu ultrices
        justo, sit amet fringilla leo. Praesent id dui id augue vehicula commodo
        eu nec nunc. Cras diam purus, pretium vel est at, aliquet rutrum tortor.
        Vestibulum magna justo, commodo ac lacus quis, consequat convallis
        justo. Aenean sit amet orci odio. Sed tempor aliquet diam. Phasellus
        accumsan enim sit amet purus lobortis ultrices. Integer velit nisi,
        iaculis sed tempus sed, iaculis vel eros. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean
        non hendrerit ex, et elementum lectus. Integer viverra odio id odio
        dignissim malesuada.
        <img className="about_map" src={About_map} alt="Tło z mapą"></img>
      </span>

      <span className="text_2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        placerat felis fermentum lorem gravida faucibus. Sed a blandit metus.
        Nullam varius efficitur nibh, sed pretium felis gravida eu. Sed semper
        lacus sed volutpat posuere. Ut ultricies non orci nec consequat.
        Suspendisse sed massa a augue viverra aliquam. Donec a mattis erat, a
        varius erat. Phasellus nisl ex, placerat id orci non, ultricies pretium
        mi. Sed non ipsum cursus, molestie nibh et, fringilla turpis. Proin
        efficitur eros at ex sagittis gravida. Mauris imperdiet tellus vitae
        commodo auctor. Mauris mauris enim, sagittis in est non, iaculis cursus
        elit. Nulla vehicula consectetur convallis. Duis euismod odio vitae
        ultrices venenatis. Proin erat quam, imperdiet vel justo et, blandit
        faucibus nulla. Aliquam erat volutpat. Sed viverra ipsum nunc, sit amet
        dignissim orci rutrum in. Morbi venenatis, metus vel mattis
        sollicitudin, erat mi tempus mi, sed porttitor dolor velit eget nisi.
        Vivamus sapien nisl, porttitor sit amet facilisis et, luctus sit amet
        nibh. Nulla facilisi. Pellentesque et convallis dui. Donec eu ultrices
        justo, sit amet fringilla leo. Praesent id dui id augue vehicula commodo
        eu nec nunc. Cras diam purus, pretium vel est at, aliquet rutrum tortor.
        Vestibulum magna justo, commodo ac lacus quis, consequat convallis
        justo. Aenean sit amet orci odio. Sed tempor aliquet diam. Phasellus
        accumsan enim sit amet purus lobortis ultrices. Integer velit nisi,
        iaculis sed tempus sed, iaculis vel eros. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean
        non hendrerit ex, et elementum lectus. Integer viverra odio id odio
        dignissim malesuada.
      </span>
      <Link to="/">
        <button className="btn_home_2">
          <img
            className="return_home_2"
            src={Return_home_2}
            alt="Przycisk powrotny"
          ></img>
        </button>
      </Link>
    </div>
  );
}

export default About;
