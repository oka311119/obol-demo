/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Card } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlashCardOverridesProps = {
    FlashCard?: PrimitiveOverrideProps<FlexProps>;
    Likeda?: PrimitiveOverrideProps<FlexProps>;
    "User Likedd"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon29766875?: MyIconProps;
    level?: PrimitiveOverrideProps<TextProps>;
    Bodya?: PrimitiveOverrideProps<FlexProps>;
    Frame29766879?: PrimitiveOverrideProps<FlexProps>;
    Frame29766880?: PrimitiveOverrideProps<FlexProps>;
    Frame29766881?: PrimitiveOverrideProps<FlexProps>;
    Channel?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
    Frame29766885?: PrimitiveOverrideProps<FlexProps>;
    MyIcon29766886?: MyIconProps;
    Question36553311?: PrimitiveOverrideProps<FlexProps>;
    Question29766887?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D36553314"?: PrimitiveOverrideProps<TextProps>;
    Answer36553315?: PrimitiveOverrideProps<FlexProps>;
    Answer36553316?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D36553317"?: PrimitiveOverrideProps<TextProps>;
    Imagesa?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Shared?: PrimitiveOverrideProps<FlexProps>;
    Share3?: PrimitiveOverrideProps<FlexProps>;
    thumb_down?: PrimitiveOverrideProps<ViewProps>;
    "9929766891"?: PrimitiveOverrideProps<TextProps>;
    Repost2?: PrimitiveOverrideProps<FlexProps>;
    thumb_up?: PrimitiveOverrideProps<ViewProps>;
    "9929766894"?: PrimitiveOverrideProps<TextProps>;
    MyIcons?: MyIconProps;
} & EscapeHatchProps;
export declare type FlashCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    card?: Card;
} & {
    overrides?: FlashCardOverridesProps | undefined | null;
}>;
export default function FlashCard(props: FlashCardProps): React.ReactElement;
