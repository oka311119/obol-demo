/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IUserOverridesProps = {
    IUser?: PrimitiveOverrideProps<FlexProps>;
    IUserKeys?: PrimitiveOverrideProps<FlexProps>;
    "User id"?: PrimitiveOverrideProps<TextProps>;
    email36682707?: PrimitiveOverrideProps<TextProps>;
    name36682710?: PrimitiveOverrideProps<TextProps>;
    profileImageUrl36682711?: PrimitiveOverrideProps<TextProps>;
    createdAt36682712?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682713?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682714?: PrimitiveOverrideProps<TextProps>;
    Channels36682715?: PrimitiveOverrideProps<TextProps>;
    IUserValues?: PrimitiveOverrideProps<FlexProps>;
    id?: PrimitiveOverrideProps<TextProps>;
    email36682718?: PrimitiveOverrideProps<TextProps>;
    name36682719?: PrimitiveOverrideProps<TextProps>;
    profileImageUrl36682720?: PrimitiveOverrideProps<TextProps>;
    createdAt36682721?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682722?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682723?: PrimitiveOverrideProps<TextProps>;
    Channels36682724?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IUserProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: IUserOverridesProps | undefined | null;
}>;
export default function IUser(props: IUserProps): React.ReactElement;
