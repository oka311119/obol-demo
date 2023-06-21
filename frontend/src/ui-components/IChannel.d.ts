/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IChannelOverridesProps = {
    IChannel?: PrimitiveOverrideProps<FlexProps>;
    IChannelKeys?: PrimitiveOverrideProps<FlexProps>;
    "Channel id"?: PrimitiveOverrideProps<TextProps>;
    name36682884?: PrimitiveOverrideProps<TextProps>;
    canDelete36682885?: PrimitiveOverrideProps<TextProps>;
    thumbnailUrl36682886?: PrimitiveOverrideProps<TextProps>;
    createdAt36682887?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682888?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682889?: PrimitiveOverrideProps<TextProps>;
    userID36682890?: PrimitiveOverrideProps<TextProps>;
    Cards36682900?: PrimitiveOverrideProps<TextProps>;
    IChannelValues?: PrimitiveOverrideProps<FlexProps>;
    id?: PrimitiveOverrideProps<TextProps>;
    name36682893?: PrimitiveOverrideProps<TextProps>;
    canDelete36682894?: PrimitiveOverrideProps<TextProps>;
    thumbnailUrl36682895?: PrimitiveOverrideProps<TextProps>;
    createdAt36682896?: PrimitiveOverrideProps<TextProps>;
    updatedAt36682897?: PrimitiveOverrideProps<TextProps>;
    deletedAt36682898?: PrimitiveOverrideProps<TextProps>;
    userID36682899?: PrimitiveOverrideProps<TextProps>;
    Cards36682901?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IChannelProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: IChannelOverridesProps | undefined | null;
}>;
export default function IChannel(props: IChannelProps): React.ReactElement;
