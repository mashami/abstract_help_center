import React from "react";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className="flex flex-col gap-y-16 lg:gap-y-16 lg:grid grid-cols-2 gap-x-5 md:mx-32 mx-10">
      <Card
        image="images/first.png"
        title="Using Abstract"
        desc="Abstract lets you manage, version, and document your designs in one place."
      />
      <Card
        image="images/second.png"
        title="Manage your account"
        desc="Configure your account settings, such as your email, profile details, and password."
      />
      <Card
        image="images/third.png"
        title="Manage organizations, teams, and projects"
        desc="Use Abstract organizations, teams, and projects to organize your people and your work."
      />
      <Card
        image="images/four.png"
        title="Manage billing"
        desc="Change subscriptions and payment details."
      />
      <Card
        image="images/five.png"
        title="Authenticate to Abstract"
        desc="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
      />
      <Card
        image="images/six.png"
        title="Abstract support"
        desc="Get in touch with a human."
      />
    </div>
  );
};

export default CardList;
