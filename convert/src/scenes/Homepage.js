import React from "react";
import { Header, Client, Feature, Footer } from "parts/Part";
import { Section, Card, List, Button } from "elements/Element";
import Fade from "react-reveal/Fade";
import MidlewareProps from "../PropsType";

import HeroImage from "assets/images/hero-image.png";
import FeatureTitle01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTitle02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTitle03 from "assets/images/feature-tile-icon-03.svg";
import FeatureTitle04 from "assets/images/feature-tile-icon-04.svg";
MidlewareProps({ Section });
let dataFeature = [
  {
    imgSrc: FeatureTitle01,
    imgAlt: "Feature Icon Title 01",
    title: "Join the System",
    description:
      "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
  },
  {
    imgSrc: FeatureTitle02,
    imgAlt: "Feature Icon Title 01",
    title: "Join the System",
    description:
      "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
  },
  {
    imgSrc: FeatureTitle03,
    imgAlt: "Feature Icon Title 01",
    title: "Join the System",
    description:
      "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
  },
  {
    imgSrc: FeatureTitle04,
    imgAlt: "Feature Icon Title 01",
    title: "Join the System",
    description:
      "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
  },
];

let listPricing = [
  {
    price: 27,
    currencySymbol: "$",
    descriptiom: " ini deskripsi fiturnya ",
    features: [
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: false, content: "ini konten fiturnya" },
      { isChecked: false, content: "ini konten fiturnya" },
    ],
  },
  {
    price: 47,
    currencySymbol: "$",
    descriptiom: " ini deskripsi fiturnya ",
    features: [
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: false, content: "ini konten fiturnya" },
    ],
  },
  {
    price: 99,
    currencySymbol: "$",
    descriptiom: " ini deskripsi fiturnya ",
    features: [
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
      { isChecked: true, content: "ini konten fiturnya" },
    ],
  },
];

export default function Homepage() {
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero  illustration-section-01" isCenterContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={1500}>
                  <h1 className="mt-0 mb-16 ">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={2000}>
                    <p className="mt-0 mb-32 ">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div
                className="hero-figure  illustration-element-01"
                data-reveal-value="20px"
                data-reveal-delay="800"
              >
                <Fade bottom delay={2500}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Client></Client>
        <Section className="features-tiles section">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {dataFeature.map((item, index) => (
                  <Feature
                    key={index}
                    delayInMs={index * 500}
                    data={item}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                {listPricing.map((item, index) => {
                  return (
                    <Card key={index} index={index}>
                      <div className="pricing-item-content">
                        <div className="pricing-item-header pb-24 mb-24">
                          <div className="pricing-item-price mb-4">
                            <span className="pricing-item-price-currency h2">
                              {item.currencySymbol}
                            </span>
                            <span
                              className="pricing-item-price-amount h1 pricing-switchable"
                              data-pricing-monthly="34"
                              data-pricing-yearly="27"
                            >
                              {item.price}
                            </span>
                          </div>
                          <div className="text-xs text-color-low">
                            {item.descriptiom}
                          </div>
                        </div>
                        <div className="pricing-item-features mb-40">
                          <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                            What’s included
                          </div>
                          <List
                            data={item.features}
                            isSmall
                            className="pricing-item-features-list    mb-32"
                          ></List>
                        </div>
                      </div>
                      <div className="pricing-item-cta mb-8">
                        <Button isPrimary isBlock>
                          Start free trial
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer></Footer>
    </div>
  );
}
