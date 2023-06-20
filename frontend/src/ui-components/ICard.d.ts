/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ICardOverridesProps = {
    ICard?: PrimitiveOverrideProps<FlexProps>;
    ICardKeys?: PrimitiveOverrideProps<FlexProps>;
    "Card id"?: PrimitiveOverrideProps<TextProps>;
    channelId36682907?: PrimitiveOverrideProps<TextProps>;
    question36682908?: PrimitiveOverrideProps<TextProps>;
    answer36682909?: PrimitiveOverrideProps<TextProps>;
    level36682910?: PrimitiveOverrideProps<TextProps>;
    dueDate?: PrimitiveOverrideProps<TextProps>;
    questionImageUrl36682912?: PrimitiveOverrideProps<TextProps>;
    answerImageUrl36682913?: PrimitiveOverrideProps<TextProps>;
    createdAt36682914?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682925?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682926?: PrimitiveOverrideProps<TextProps>;
    channelId36682927?: PrimitiveOverrideProps<TextProps>;
    Tags36682928?: PrimitiveOverrideProps<TextProps>;
    Plans36682929?: PrimitiveOverrideProps<TextProps>;
    ICardValues?: PrimitiveOverrideProps<FlexProps>;
    id?: PrimitiveOverrideProps<TextProps>;
    channelId36682917?: PrimitiveOverrideProps<TextProps>;
    question36682918?: PrimitiveOverrideProps<TextProps>;
    answer36682919?: PrimitiveOverrideProps<TextProps>;
    email?: PrimitiveOverrideProps<TextProps>;
    level36682921?: PrimitiveOverrideProps<TextProps>;
    questionImageUrl36682922?: PrimitiveOverrideProps<TextProps>;
    answerImageUrl36682923?: PrimitiveOverrideProps<TextProps>;
    createdAt36682924?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682930?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682931?: PrimitiveOverrideProps<TextProps>;
    channelId36682932?: PrimitiveOverrideProps<TextProps>;
    Tags36682933?: PrimitiveOverrideProps<TextProps>;
    Plans36682934?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ICardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ICardOverridesProps | undefined | null;
}>;
export default function ICard(props: ICardProps): React.ReactElement;
