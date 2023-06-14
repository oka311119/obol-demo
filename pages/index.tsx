import { Amplify } from "aws-amplify";
import { Flex, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from '../src/aws-exports';
import {
  NavBar,
  SideBar,
  ContactUs,
  MarketingFooter,
} from "../src/ui-components";

Amplify.configure(config);

function Home() {
  return (
    <Flex direction="column" className="min-h-screen">
      <NavBar />
      <Flex direction="column" grow={1}>
        <Flex grow={1}>
          <SideBar />
          <Flex grow={1}>
            <ContactUs />
          </Flex>
        </Flex>
      </Flex>
      <MarketingFooter />
    </Flex>
  );
}

export default withAuthenticator(Home);
