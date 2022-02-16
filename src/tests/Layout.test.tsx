import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/layout/Layout";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <Layout>
          <></>
        </Layout>
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
