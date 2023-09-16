import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/taximage1.jpg";
import img2 from "../images/taximage2.jpg";
import "../App.css";
import img3 from "../images/taximage3.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Headeraferlog(props) {
  return (
    <div>
      <div>
        <div className="n-wrapper">
          <div className="Nav1">
            <div className="n-name">MINTAX</div>
          </div>
          <div className="Nav2">
            <div className="links">
              <ul style={{ listStyleType: "none" }}>
                <li>Home</li>
                <li>About us</li>
                <li>Description</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="HomeB">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          interval={2000}
          showThumbs={false}
          // showIndicators={false}
        >
          <div>
            <img className="image" src={img3} alt="Item1" />
          </div>
          <div>
            <img className="image" src={img1} alt="Item3" />
          </div>
          <div>
            <img className="image" src={img2} alt="Item2" />
          </div>
        </Carousel>
        <div className="description">
          <h2>Description:</h2>
          <p>
            <br />
            Welcome to MINTAX, your one-stop solution for all your tax
            calculation needs. We understand that navigating the world of taxes
            can be complex and time-consuming. That's why we've created a
            user-friendly platform that simplifies the tax calculation process
            for individuals, businesses, and organizations of all sizes.
            <br />
            <br />
            Our mission is to empower you with the tools and knowledge necessary
            to make informed tax decisions, maximize your tax savings, and
            ensure compliance with tax regulations. Whether you're filing your
            personal income tax, managing your business's tax liabilities, or
            seeking expert tax advice, we've got you covered.
            <br />
            <br />
            At MINTAX, we offer a range of tax calculators, resources, and
            expert advice to help you make sense of your financial obligations.
            Our intuitive and secure platform is designed to save you time,
            reduce stress, and optimize your financial outcomes. Join the
            thousands of satisfied users who have trusted us with their tax
            needs.
            <br />
            <br />
            Explore our comprehensive tax resources, utilize our calculators,
            and connect with tax professionals to take control of your financial
            future. We are here to simplify the complexities of taxes and make
            your financial journey smoother and more rewarding. With MINTAX,
            managing your taxes has never been easier.
          </p>
        </div>
        <div className="aboutus">
          <h2>About us:</h2>
          <p>
            <br />
            "MINTAX" was founded by a team of experienced tax professionals and
            software developers who recognized the need for a simplified and
            accessible tax calculation platform. Our founders shared a common
            vision: to empower individuals and businesses by demystifying the
            tax process. With years of expertise in tax law, finance, and
            software development, our team has built a platform that combines
            cutting-edge technology with comprehensive tax knowledge.
            <br />
            <br />
            We are committed to providing you with accurate, reliable, and
            up-to-date tax calculation tools and resources. Our tax experts are
            passionate about helping you navigate the complexities of tax
            regulations, and they are here to assist you every step of the way.
            Whether you have questions about deductions, credits, tax planning,
            or compliance, our team is dedicated to ensuring that you have the
            information you need to make informed financial decisions.
            <br />
            <br />
            At MINTAX, we believe that everyone should have access to the
            information and tools required to manage their taxes effectively.
            Our commitment to transparency, accuracy, and customer satisfaction
            drives us to continuously improve and expand our services.
            <br />
            <br />
            Thank you for choosing MINTAX as your tax calculation partner. We
            look forward to being your trusted resource for all your tax-related
            needs.
          </p>
        </div>
        <div>
          {/* <Link to="/profile/part1">
          <div className="d-grid gap-2 btn">
          <button className="btn btn-primary" type="button">
          Create Profile
          </button>
          </div>
        </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Headeraferlog;
