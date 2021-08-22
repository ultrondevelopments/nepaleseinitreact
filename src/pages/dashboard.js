import React from "react";
import DashboardSection from "./../components/DashboardSection";
import HeroSection from "./../components/HeroSection";
import { requireAuth } from "./../util/auth.js";

function DashboardPage(props) {
  return (
    <>
      <DashboardSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Dashboard"
        subtitle=""
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      
    </>
  );
}

export default requireAuth(DashboardPage);
