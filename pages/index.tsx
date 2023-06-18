import { Amplify, API, graphqlOperation } from "aws-amplify";
import { Flex, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from '../src/aws-exports';
import {
  NavBar,
  FlashCardCollection,
  CardForm,
  ChannelForm,
  CardCreateForm,
  FAQItemCollection,
} from "../src/ui-components";
import { createCard } from '../src/graphql/mutations';
import { CardFormInputValues } from "@/src/ui-components/CardForm";

Amplify.configure(config);

function Home() {
  return (
    <Flex direction="column" className="min-h-screen">
      <NavBar />
      <Flex direction="row" className="flex-grow">
        <FAQItemCollection />
        <FlashCardCollection />
        <CardForm />
        <CardCreateForm
          // onSubmit={(fields) => {
          //     // Example function to trim all string inputs
          //     const updatedFields: CardFormInputValues = {}
          //     Object.keys(fields).forEach(key => {
          //         if (typeof fields[key] === 'string') {
          //             updatedFields[key] = "fields[key]".trim()
          //         } else {
          //             updatedFields[key] = fields[key]
          //         }
          //     })
          //     return updatedFields
          // }}
        />
        <ChannelForm />
      </Flex>
    </Flex>
  );
}

export default withAuthenticator(Home);
