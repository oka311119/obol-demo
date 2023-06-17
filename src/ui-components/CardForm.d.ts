/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CardFormInputValues = {
    question?: string;
    answer?: string;
    dueDate?: string;
};
export declare type CardFormValidationValues = {
    question?: ValidationFunction<string>;
    answer?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardFormOverridesProps = {
    CardFormGrid?: PrimitiveOverrideProps<GridProps>;
    question?: PrimitiveOverrideProps<TextAreaFieldProps>;
    answer?: PrimitiveOverrideProps<TextAreaFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardFormProps = React.PropsWithChildren<{
    overrides?: CardFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CardFormInputValues) => CardFormInputValues;
    onSuccess?: (fields: CardFormInputValues) => void;
    onError?: (fields: CardFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardFormInputValues) => CardFormInputValues;
    onValidate?: CardFormValidationValues;
} & React.CSSProperties>;
export default function CardForm(props: CardFormProps): React.ReactElement;
