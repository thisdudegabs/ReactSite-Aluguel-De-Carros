import React from "react";
import "../../styles/our-members.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/avatar-1.jpg";
import ava02 from "../../assets/all-images/avatar-2.jpg";
import ava03 from "../../assets/all-images/avatar-3.jpg";
import ava04 from "../../assets/all-images/avatar-4.jpg";

const Our_Members = [
  {
    name: "Mateus Araujo",
    experience: "2 Anos de Experiência",
    fbUrl: "jjj",
    instUrl: "jjj",
    twitUrl: "jjj",
    linkedinUrl: "jjj",
    imgUrl: ava01,
  },
  {
    name: "Carina Medeiros",
    experience: "5 anos de Experiência",
    fbUrl: "j",
    instUrl: "g",
    twitUrl: "g",
    linkedinUrl: "g",
    imgUrl: ava02,
  },
  {
    name: "Noah Blau",
    experience: "7 anos de Experiência",
    fbUrl: "g",
    instUrl: "g",
    twitUrl: "g",
    linkedinUrl: "g",
    imgUrl: ava03,
  },
  {
    name: "Edna Maria",
    experience: "5 anos de Experiência",
    fbUrl: "g",
    instUrl: "g",
    twitUrl: "g",
    linkedinUrl: "g",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      {Our_Members.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single_member">
            <div className="single_member-img">
              <img src={item.imgUrl} alt="" className="w-100 " />

              <div className="single_member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-fill"></i>
                </Link>

                <Link to={item.twitUrl}>
                  <i class="ri-twitter-fill"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-fill"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-fill"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section_description text-lg-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
