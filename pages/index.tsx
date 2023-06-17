import { Amplify } from "aws-amplify";
import { Flex, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from '../src/aws-exports';
import {
  NavBar,
  FlashCardCollection,
  CardForm,
  ChannelForm,
} from "../src/ui-components";

Amplify.configure(config);

function Home() {
  return (
    <Flex direction="column" className="min-h-screen">
      <NavBar />
      <Flex direction="row" className="flex-grow">
        <FlashCardCollection />
        <CardForm />
        <ChannelForm />
      </Flex>
    </Flex>
  );
}

export default withAuthenticator(Home);
