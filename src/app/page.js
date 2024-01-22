// import GridLayout from "@/components/GridLayout";
"use client"
import Layout from "@/components/Layout";
import Regions from "@/components/Regions";
import FeaturesProperties from "@/components/feature-properties";
import Link from "next/link";
import SectionHeader from "@/components/section-header";
import ReusableCountUp from "@/components/counter";
import Dropdown from "@/components/form-control-two";
import Testimonial from "../data/testimonial.json";

export default async function Home() {
  const handleChatButtonClick = () => {
    window.location.href =
      "mailto:wissambywissam@gmail.com?subject=Inquiry&body=Drop%20us%20a%20message";
  };
  return (
    <Layout>
      <main>
        <>
          <div className="hero-header hero-header__one align-items-center background-image d-flex position-relative">
            <img
              src="assets/img/header/wcvr.jpeg"
              alt=""
              className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
            />
          </div>
          {/* Start Top Regions Section */}
          <div className="bg-white py-5 border-bottom">
            <div className="container py-4">
              <SectionHeader />
              <Regions />
              {/* <FeaturesProperties /> */}
              <div className="text-center mt-5" data-aos="fade-up">
                {/* Start Button */}
                <button className="btn text-white bg-gray-900  hover:bg-gray-700 btn-lg d-inline-flex hstack gap-2">
                  <span onClick={handleChatButtonClick}>Contact Now</span>
                  <span className="vr" />
                  <i className="fa-arrow-right fa-solid fs-14" />
                </button>
              </div>
            </div>
          </div>
        </>
      </main>
    </Layout>
  );
}
