import React from "react";

// imgs
import KidJumping from "../imgs/kidjumping.jpg";
import MomKids from "../imgs/mom-kids.jpg";

// Components
import { CardContainer } from "../components/CardContainer";
import { PhoneAnimation } from "../components/PhoneAnimation";
import { NavLink } from "react-router-dom";
import { SupportAnimation } from "../components/SupportAnimation";
import { TestimonialSlider } from "../components/TestimonialSlider";

export const Home = () => {
  return (
    <main>
      <section className="home-hero-container">
        <div className="home-hero">
          <div className="home-hero-inner">
            <p>Peace of Mind, One Dose at a Time with </p>
            <h1>Encurage!</h1>
          </div>
        </div>
      </section>

      <section className="home-main-container">
        <div className="home-main">
          <h2>Your Child's Health, is Our Priority</h2>
          <p>
            We understand the challenges that parents face in managing their
            children's health, and that's why we've developed a comprehensive
            app dedicated to making this task easier and more efficient. From
            medication tracking to timely reminders, our app ensures that you're
            always in control of your child's well-being.
          </p>
          <CardContainer />

          <p>
            We believe that every child deserves the best care, and we're here
            to provide you with the tools and support to make that happen. With
            our expertise and your dedication, together, we can give your child
            the healthiest start in life.
          </p>
        </div>
      </section>

      <section className="home-app-container">
        <PhoneAnimation />
        <div className="duo-container">
          <div className="duo">
            <div className="duo-img-container">
              <img src={KidJumping} alt="" />
            </div>

            <div className="duo-info">
              <h3>Tailored for Your Child</h3>
              <p>
                Ensure your child's health receives the personalized attention
                it deserves. With numerous options to customize, you'll have the
                power to create a unique healthcare plan that caters to your
                child's individual needs. Start now and make their well-being a
                top priority.
              </p>
              <NavLink to={"AppFeatures"}>
                <button className="cta-btn-home">Learn More</button>
              </NavLink>
            </div>
          </div>
          <div className="duo">
            <div className="duo-info">
              <h2>Your Child's Health, Your Way</h2>
              <p>
                Take control of your child's health with our app. Prioritize
                their well-being and give them the personalized care they
                deserve. Get started today.
              </p>

              <NavLink to={"AppFeatures"}>
                <button className="cta-btn-home">Explore Now</button>
              </NavLink>
            </div>
          </div>
          <div className="duo">
            <div className="duo-info">
              <h3>Curiosity Unleashed: The Untold Dangers of Mis-Dosage</h3>
              <p>
                Are you curious to know the untold dangers of mis-dosage when it
                comes to your child's health? It's a story that every parent
                should explore. Our app offers a fascinating journey into these
                risks, providing a deeper understanding of the consequences and
                how to protect your child. Let your curiosity lead the way to
                essential knowledge.
              </p>
              <NavLink to={"ChildrenHealth"}>
                <button className="cta-btn-home">Get Started Today</button>
              </NavLink>
            </div>
            <div className="duo-img-container">
              <img src={MomKids} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-founder-container">
        <div className="home-founder">
          <div className="home-founder-info">
            <h2>Meet the Heart Behind The Mission</h2>
            <p>
              Discover the foundation of our app by exploring the story of our
              founder. It all started with a mother's concern for her daughter's
              medicine tracking. Learn how <span>Hadas Kanner-Golan</span>
              embarked on a mission to create a user-friendly solution. Get to
              know the backstory and the inspiration behind our innovative app.
            </p>

            <NavLink to={"Founder"}>
              <button className="cta-btn-home">
                Discover the Heart Behind the App
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="home-review-container">
        <div>
          <h2>See What Parents Say</h2>
        </div>
        <TestimonialSlider />
      </section>

      <section className="home-contact-container">
        <h2>Help Center</h2>
        <p>Question not answered yet? We are here to help!</p>
        <div className="contact-card-container">
          <SupportAnimation />
          <div className="contact-card-wrapper">
            <div className="contact-card">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M14.9,6.707c-0.804-2.497-3.649-4.351-7.035-4.351c-4.008,0-7.27,2.594-7.27,5.782
								c0,2.163,1.516,4.133,3.903,5.122v3.091c0,0.251,0.144,0.478,0.372,0.586c0.087,0.042,0.182,0.062,0.276,0.062
								c0.148,0,0.295-0.051,0.412-0.15l3.678-3.038c0.14-0.022,0.275-0.057,0.413-0.084c0.655,0.666,1.544,1.185,2.607,1.46
								c0.198,0.051,0.401,0.094,0.608,0.125l2.641,2.182c0.118,0.099,0.264,0.15,0.413,0.15c0.094,0,0.188-0.02,0.276-0.062
								c0.228-0.108,0.372-0.335,0.372-0.586v-2.135c1.74-0.761,2.84-2.231,2.84-3.846C19.405,8.862,17.456,7.073,14.9,6.707z
								 M8.885,12.552c-0.019,0.003-0.032,0.018-0.051,0.022c-0.101,0.022-0.2,0.056-0.281,0.123l-2.76,2.28v-2.161
								c0-0.275-0.175-0.521-0.434-0.612C3.253,11.467,1.89,9.871,1.89,8.138c0-2.474,2.68-4.487,5.975-4.487
								c2.604,0,4.801,1.265,5.617,3.014c0.187,0.401,0.302,0.823,0.33,1.268c0.005,0.069,0.028,0.134,0.028,0.205
								c0,1.819-1.481,3.438-3.706,4.129c-0.115,0.037-0.224,0.08-0.343,0.111C9.497,12.455,9.196,12.513,8.885,12.552z M15.703,13.809
								c-0.259,0.091-0.434,0.336-0.434,0.612v1.199l-1.723-1.422c-0.095-0.079-0.211-0.129-0.333-0.144
								c-0.219-0.028-0.431-0.068-0.636-0.121c-0.545-0.14-1.023-0.364-1.433-0.64c2.423-0.969,3.99-2.942,3.99-5.155
								c0-0.024-0.004-0.047-0.005-0.071c1.718,0.385,2.98,1.553,2.98,2.948C18.11,12.202,17.165,13.299,15.703,13.809z"
                ></path>
                <path
                  fill="none"
                  d="M4.68,7.591h6.167c0.358,0,0.648-0.29,0.648-0.648s-0.29-0.648-0.648-0.648H4.68
								c-0.358,0-0.648,0.29-0.648,0.648S4.323,7.591,4.68,7.591z"
                ></path>
                <path
                  fill="none"
                  d="M8.709,8.636H4.68c-0.358,0-0.648,0.29-0.648,0.648c0,0.358,0.29,0.648,0.648,0.648h4.028
								c0.358,0,0.648-0.29,0.648-0.648C9.356,8.926,9.067,8.636,8.709,8.636z"
                ></path>
              </svg>
              <div>
                <h3>FAQ's</h3>
                <p>Got questions? We've got answers</p>
              </div>

              <NavLink to={"HelpCenterLayout"}>
                <button className="cta-btn-home">Visit Help Center</button>
              </NavLink>
            </div>
            <div className="contact-card">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z"
                ></path>
                <path
                  fill="none"
                  d="M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z"
                ></path>
              </svg>
              <div>
                <h3>Technical Support</h3>
                <p>Problems with your App? We can help fix it!</p>
              </div>

              <NavLink to={"HelpCenterLayout"}>
                <button className="cta-btn-home">Report a Issue</button>
              </NavLink>
            </div>
            <div className="contact-card">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"
                ></path>
              </svg>
              <div>
                <h3>Comments? Concerns?</h3>
                <p>Email us! We would love to hear from you!</p>
              </div>
              {/* Figure out Email Situation */}
              <button className="cta-btn-home">Email Us</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
