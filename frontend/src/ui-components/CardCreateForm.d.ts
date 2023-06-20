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
export declare type CardCreateFormInputValues = {
    channelId?: string;
    question?: string;
    answer?: string;
    level?: number;
    dueDate?: string;
    questionImageUrl?: string[];
    answerImageUrl?: string[];
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};
export declare type CardCreateFormValidationValues = {
    channelId?: ValidationFunction<string>;
    question?: ValidationFunction<string>;
    answer?: ValidationFunction<string>;
    level?: ValidationFunction<number>;
    dueDate?: ValidationFunction<string>;
    questionImageUrl?: ValidationFunction<string>;
    answerImageUrl?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    deletedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardCreateFormOverridesProps = {
    CardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    channelId?: PrimitiveOverrideProps<TextFieldProps>;
    question?: PrimitiveOverrideProps<TextFieldProps>;
    answer?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
    questionImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    answerImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    deletedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CardCreateFormProps = React.PropsWithChildren<{
    overrides?: CardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CardCreateFormInputValues) => CardCreateFormInputValues;
    onSuccess?: (fields: CardCreateFormInputValues) => void;
    onError?: (fields: CardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CardCreateFormInputValues) => CardCreateFormInputValues;
    onValidate?: CardCreateFormValidationValues;
} & React.CSSProperties>;
export default function CardCreateForm(props: CardCreateFormProps): React.ReactElement;
