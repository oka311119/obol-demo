import { Amplify } from "aws-amplify";
import { Flex, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from '../src/aws-exports';
import {
  NavBar,
  SideBar,
  ContactUs,
  MarketingFooter,
  ItemCardCollection,
  PostCreateForm,
} from "../src/ui-components";

Amplify.configure(config);

function Home() {
  return (
    <Flex direction="column" className="min-h-screen">
      <NavBar />
      <Flex direction="row" className="flex-grow">
        <ItemCardCollection />
        <PostCreateForm />
      </Flex>
    </Flex>
  );
}

export default withAuthenticator(Home);
