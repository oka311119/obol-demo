/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ITagOverridesProps = {
    ITag?: PrimitiveOverrideProps<FlexProps>;
    ITagKeys?: PrimitiveOverrideProps<FlexProps>;
    "Tag id"?: PrimitiveOverrideProps<TextProps>;
    name36682938?: PrimitiveOverrideProps<TextProps>;
    createdAt36682945?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682946?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682947?: PrimitiveOverrideProps<TextProps>;
    cards36682950?: PrimitiveOverrideProps<TextProps>;
    ITagValues?: PrimitiveOverrideProps<FlexProps>;
    id?: PrimitiveOverrideProps<TextProps>;
    name36682953?: PrimitiveOverrideProps<TextProps>;
    createdAt36682954?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682955?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682956?: PrimitiveOverrideProps<TextProps>;
    cards36682957?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ITagProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ITagOverridesProps | undefined | null;
}>;
export default function ITag(props: ITagProps): React.ReactElement;
