import React from "react";
import { Accordion } from "react-bootstrap";
import {
  PRODUCT_FILTERS,
  PRICE_FILTERS,
  SIZE_FILTERS,
  COLOR_FILTERS,
} from "./Filters.data";
export default function Filters() {
  return (
    <>
      <CategoryAccordion filters={PRODUCT_FILTERS} />
      <PriceAccordion filters={PRICE_FILTERS} />
      <SizeAccordion filters={SIZE_FILTERS} />
      <ColorAccordion filters={COLOR_FILTERS} />
    </>
  );
}

export const CategoryAccordion = ({ filters }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="border-0">
        <Accordion.Header className="Accordion-Header-producsPage">
          PRODUCT CATEGORIES
        </Accordion.Header>
        {filters.map((filterOpt, idx) => (
          <Accordion.Body key={idx} className="Accordion-Body-producsPage">
            <a href="">{filterOpt} </a>
          </Accordion.Body>
        ))}
      </Accordion.Item>
    </Accordion>
  );
};
export const PriceAccordion = ({ filters }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="border-0">
        <Accordion.Header className="Accordion-Header-producsPage">
          FILTER BY PRICE
        </Accordion.Header>
        {filters.map((priceFilterOpt, idx) => (
          <Accordion.Body key={idx} className="Accordion-Body-producsPage">
            <a href="">{priceFilterOpt} </a>
          </Accordion.Body>
        ))}
      </Accordion.Item>
    </Accordion>
  );
};
export const SizeAccordion = ({ filters }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="border-0">
        <Accordion.Header className="Accordion-Header-producsPage">
          FILTER BY SIZE
        </Accordion.Header>
        <div className="sizes">
          {filters.map((priceFilterOpt, idx) => (
            <Accordion.Body
              key={idx}
              className="Accordion-Body-producsPage size-opt"
            >
              <a href="">{priceFilterOpt}</a>
            </Accordion.Body>
          ))}
        </div>
      </Accordion.Item>
    </Accordion>
  );
};
export const ColorAccordion = ({ filters }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="border-0">
        <Accordion.Header className="Accordion-Header-producsPage">
          FILTER BY COLOR
        </Accordion.Header>
        <div className="colors">
          {filters.map((colorFilterOpt, idx) => (
            <Accordion.Body
              key={idx}
              className="Accordion-Body-producsPage color-opt"
            >
              <div
                className="color-circle"
                style={{ backgroundColor: `#${colorFilterOpt}` }}
              ></div>
            </Accordion.Body>
          ))}
        </div>
      </Accordion.Item>
    </Accordion>
  );
};
