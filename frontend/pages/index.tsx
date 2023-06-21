import { Amplify, API, graphqlOperation } from "aws-amplify";
import { Flex, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsmobile from '../src/aws-exports';
import { createCard } from '../src/graphql/mutations';
import { CardFormInputValues } from "@/src/ui-components/CardForm";

Amplify.configure(awsmobile);

function Home() {
  return (
    <Flex direction="column" className="min-h-screen">
      <p>Hello world</p>
    </Flex>
  );
}

export default withAuthenticator(Home);
