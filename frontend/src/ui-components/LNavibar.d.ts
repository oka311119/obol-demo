/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LNavibarOverridesProps = {
    LNavibar?: PrimitiveOverrideProps<ViewProps>;
    LNavibarLink?: PrimitiveOverrideProps<FlexProps>;
    User?: PrimitiveOverrideProps<TextProps>;
    Channel?: PrimitiveOverrideProps<TextProps>;
    Card?: PrimitiveOverrideProps<TextProps>;
    Tag?: PrimitiveOverrideProps<TextProps>;
    Plan?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LNavibarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LNavibarOverridesProps | undefined | null;
}>;
export default function LNavibar(props: LNavibarProps): React.ReactElement;
