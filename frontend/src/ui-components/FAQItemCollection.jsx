/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Channel } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FAQItem from "./FAQItem";
import { Collection } from "@aws-amplify/ui-react";
export default function FAQItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Channel,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Cards: await item.Cards.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "FAQItemCollection")}
      {...rest}
    >
      {(item, index) => (
        <FAQItem
          channel={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FAQItem>
      )}
    </Collection>
  );
}
