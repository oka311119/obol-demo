/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentCardOverridesProps = {
    CommentCard?: PrimitiveOverrideProps<FlexProps>;
    Card?: PrimitiveOverrideProps<FlexProps>;
    Liked?: PrimitiveOverrideProps<FlexProps>;
    "User Liked"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon36553278?: MyIconProps;
    "Danny liked this"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame36553282?: PrimitiveOverrideProps<FlexProps>;
    Frame36553283?: PrimitiveOverrideProps<FlexProps>;
    Frame36553284?: PrimitiveOverrideProps<FlexProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum"?: PrimitiveOverrideProps<TextProps>;
    Frame36553288?: PrimitiveOverrideProps<FlexProps>;
    MyIcon36553289?: MyIconProps;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"?: PrimitiveOverrideProps<TextProps>;
    Share36553291?: PrimitiveOverrideProps<FlexProps>;
    Share36553292?: PrimitiveOverrideProps<FlexProps>;
    MyIcon36553293?: MyIconProps;
    "9936553294"?: PrimitiveOverrideProps<TextProps>;
    Repost?: PrimitiveOverrideProps<FlexProps>;
    MyIcon36553296?: MyIconProps;
    "9936553297"?: PrimitiveOverrideProps<TextProps>;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon36553299?: MyIconProps;
    "9936553300"?: PrimitiveOverrideProps<TextProps>;
    MyIcon36553301?: MyIconProps;
} & EscapeHatchProps;
export declare type CommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommentCardOverridesProps | undefined | null;
}>;
export default function CommentCard(props: CommentCardProps): React.ReactElement;
