/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IPlanOverridesProps = {
    IPlan?: PrimitiveOverrideProps<FlexProps>;
    IPlanKeys?: PrimitiveOverrideProps<FlexProps>;
    "Plan id"?: PrimitiveOverrideProps<TextProps>;
    planDate36682986?: PrimitiveOverrideProps<TextProps>;
    score36682987?: PrimitiveOverrideProps<TextProps>;
    createdAt36682988?: PrimitiveOverrideProps<TextProps>;
    cardId36682989?: PrimitiveOverrideProps<TextProps>;
    IPlanValues?: PrimitiveOverrideProps<FlexProps>;
    id?: PrimitiveOverrideProps<TextProps>;
    planDate36682993?: PrimitiveOverrideProps<TextProps>;
    score36682994?: PrimitiveOverrideProps<TextProps>;
    createdAt36682995?: PrimitiveOverrideProps<TextProps>;
    cardId36682996?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IPlanProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: IPlanOverridesProps | undefined | null;
}>;
export default function IPlan(props: IPlanProps): React.ReactElement;
