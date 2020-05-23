import BasicProps from "../node_modules/prop-types";
import { Button, Section, Card, List } from "elements/Element";
import { Feature } from "parts/Part";
export default (props) => {
  if (props.Button) {
    Button.propTypes = {
      tes: BasicProps.number,
      isPrimary: BasicProps.bool,
      isBlock: BasicProps.bool,
    };
  }
  if (props.Section) {
    Section.propTypes = {
      isCenterContent: BasicProps.bool,
      className: BasicProps.string,
    };
  }
  if (props.Feature) {
    Feature.propTypes = {
      delayInMs: BasicProps.number,
      data: BasicProps.object,
    };
  }
  if (props.Card) {
    Card.propTypes = {
      hasShadow: BasicProps.bool,
      className: BasicProps.string,
    };
  }
  if (props.List) {
    List.propTypes = {
      data: BasicProps.array,
      isSmall: BasicProps.bool,
    };
  }
};
