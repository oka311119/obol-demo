/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Post } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ItemCard from "./ItemCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ItemCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.rating(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Post,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={10}
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ItemCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ItemCard
          postProp={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ItemCard>
      )}
    </Collection>
  );
}
