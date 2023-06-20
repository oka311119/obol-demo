/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChannelFormInputValues = {
    name?: string;
};
export declare type ChannelFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChannelFormOverridesProps = {
    ChannelFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChannelFormProps = React.PropsWithChildren<{
    overrides?: ChannelFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChannelFormInputValues) => ChannelFormInputValues;
    onSuccess?: (fields: ChannelFormInputValues) => void;
    onError?: (fields: ChannelFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChannelFormInputValues) => ChannelFormInputValues;
    onValidate?: ChannelFormValidationValues;
} & React.CSSProperties>;
export default function ChannelForm(props: ChannelFormProps): React.ReactElement;
