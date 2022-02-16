import renderer from "react-test-renderer";
import Heading from "../components/Heading";

it("renders correctly", () => {
  const tree = renderer.create(<Heading as="h1">Invoice App</Heading>).toJSON();
  expect(tree).toMatchSnapshot();
});
