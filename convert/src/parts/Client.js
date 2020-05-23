import React from "react";
import { Section } from "elements/Element";
import Client01 from "assets/images/clients-01.svg";
import Client02 from "assets/images/clients-02.svg";
import Client03 from "assets/images/clients-03.svg";
import Client04 from "assets/images/clients-04.svg";
import Client05 from "assets/images/clients-05.svg";

import LightSpeed from "react-reveal/LightSpeed";
export default function Client() {
  return (
    <Section className="clients">
      <LightSpeed delay={3000}>
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              <li>
                <img src={Client01} alt="Clients 01" />
              </li>
              <li>
                <img src={Client02} alt="Clients 02" />
              </li>
              <li>
                <img src={Client03} alt="Clients 03" />
              </li>
              <li>
                <img src={Client04} alt="Clients 04" />
              </li>
              <li>
                <img src={Client05} alt="Clients 05" />
              </li>
            </ul>
          </div>
        </div>
      </LightSpeed>
    </Section>
  );
}
