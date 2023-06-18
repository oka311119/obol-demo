/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CardCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    channelId: "",
    question: "",
    answer: "",
    level: "",
    dueDate: "",
    questionImageUrl: [],
    answerImageUrl: [],
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  };
  const [channelId, setChannelId] = React.useState(initialValues.channelId);
  const [question, setQuestion] = React.useState(initialValues.question);
  const [answer, setAnswer] = React.useState(initialValues.answer);
  const [level, setLevel] = React.useState(initialValues.level);
  const [dueDate, setDueDate] = React.useState(initialValues.dueDate);
  const [questionImageUrl, setQuestionImageUrl] = React.useState(
    initialValues.questionImageUrl
  );
  const [answerImageUrl, setAnswerImageUrl] = React.useState(
    initialValues.answerImageUrl
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [deletedAt, setDeletedAt] = React.useState(initialValues.deletedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setChannelId(initialValues.channelId);
    setQuestion(initialValues.question);
    setAnswer(initialValues.answer);
    setLevel(initialValues.level);
    setDueDate(initialValues.dueDate);
    setQuestionImageUrl(initialValues.questionImageUrl);
    setCurrentQuestionImageUrlValue("");
    setAnswerImageUrl(initialValues.answerImageUrl);
    setCurrentAnswerImageUrlValue("");
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setDeletedAt(initialValues.deletedAt);
    setErrors({});
  };
  const [currentQuestionImageUrlValue, setCurrentQuestionImageUrlValue] =
    React.useState("");
  const questionImageUrlRef = React.createRef();
  const [currentAnswerImageUrlValue, setCurrentAnswerImageUrlValue] =
    React.useState("");
  const answerImageUrlRef = React.createRef();
  const validations = {
    channelId: [{ type: "Required" }],
    question: [{ type: "Required" }],
    answer: [{ type: "Required" }],
    level: [{ type: "Required" }],
    dueDate: [],
    questionImageUrl: [{ type: "URL" }],
    answerImageUrl: [{ type: "URL" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
    deletedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          channelId,
          question,
          answer,
          level,
          dueDate,
          questionImageUrl,
          answerImageUrl,
          createdAt,
          updatedAt,
          deletedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Card(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CardCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Channel id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={channelId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId: value,
              question,
              answer,
              level,
              dueDate,
              questionImageUrl,
              answerImageUrl,
              createdAt,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            value = result?.channelId ?? value;
          }
          if (errors.channelId?.hasError) {
            runValidationTasks("channelId", value);
          }
          setChannelId(value);
        }}
        onBlur={() => runValidationTasks("channelId", channelId)}
        errorMessage={errors.channelId?.errorMessage}
        hasError={errors.channelId?.hasError}
        {...getOverrideProps(overrides, "channelId")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Question</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId,
              question: value,
              answer,
              level,
              dueDate,
              questionImageUrl,
              answerImageUrl,
              createdAt,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            value = result?.question ?? value;
          }
          if (errors.question?.hasError) {
            runValidationTasks("question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("question", question)}
        errorMessage={errors.question?.errorMessage}
        hasError={errors.question?.hasError}
        {...getOverrideProps(overrides, "question")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Answer</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={answer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer: value,
              level,
              dueDate,
              questionImageUrl,
              answerImageUrl,
              createdAt,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            value = result?.answer ?? value;
          }
          if (errors.answer?.hasError) {
            runValidationTasks("answer", value);
          }
          setAnswer(value);
        }}
        onBlur={() => runValidationTasks("answer", answer)}
        errorMessage={errors.answer?.errorMessage}
        hasError={errors.answer?.hasError}
        {...getOverrideProps(overrides, "answer")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Level</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={level}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer,
              level: value,
              dueDate,
              questionImageUrl,
              answerImageUrl,
              createdAt,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      ></TextField>
      <TextField
        label="Due date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dueDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer,
              level,
              dueDate: value,
              questionImageUrl,
              answerImageUrl,
              createdAt,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            value = result?.dueDate ?? value;
          }
          if (errors.dueDate?.hasError) {
            runValidationTasks("dueDate", value);
          }
          setDueDate(value);
        }}
        onBlur={() => runValidationTasks("dueDate", dueDate)}
        errorMessage={errors.dueDate?.errorMessage}
        hasError={errors.dueDate?.hasError}
        {...getOverrideProps(overrides, "dueDate")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer,
              level,
              dueDate,
              questionImageUrl: values,
              answerImageUrl,
              createdAt,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            values = result?.questionImageUrl ?? values;
          }
          setQuestionImageUrl(values);
          setCurrentQuestionImageUrlValue("");
        }}
        currentFieldValue={currentQuestionImageUrlValue}
        label={"Question image url"}
        items={questionImageUrl}
        hasError={errors?.questionImageUrl?.hasError}
        errorMessage={errors?.questionImageUrl?.errorMessage}
        setFieldValue={setCurrentQuestionImageUrlValue}
        inputFieldRef={questionImageUrlRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Question image url"
          isRequired={false}
          isReadOnly={false}
          value={currentQuestionImageUrlValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.questionImageUrl?.hasError) {
              runValidationTasks("questionImageUrl", value);
            }
            setCurrentQuestionImageUrlValue(value);
          }}
          onBlur={() =>
            runValidationTasks("questionImageUrl", currentQuestionImageUrlValue)
          }
          errorMessage={errors.questionImageUrl?.errorMessage}
          hasError={errors.questionImageUrl?.hasError}
          ref={questionImageUrlRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "questionImageUrl")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer,
              level,
              dueDate,
              questionImageUrl,
              answerImageUrl: values,
              createdAt,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            values = result?.answerImageUrl ?? values;
          }
          setAnswerImageUrl(values);
          setCurrentAnswerImageUrlValue("");
        }}
        currentFieldValue={currentAnswerImageUrlValue}
        label={"Answer image url"}
        items={answerImageUrl}
        hasError={errors?.answerImageUrl?.hasError}
        errorMessage={errors?.answerImageUrl?.errorMessage}
        setFieldValue={setCurrentAnswerImageUrlValue}
        inputFieldRef={answerImageUrlRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Answer image url"
          isRequired={false}
          isReadOnly={false}
          value={currentAnswerImageUrlValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.answerImageUrl?.hasError) {
              runValidationTasks("answerImageUrl", value);
            }
            setCurrentAnswerImageUrlValue(value);
          }}
          onBlur={() =>
            runValidationTasks("answerImageUrl", currentAnswerImageUrlValue)
          }
          errorMessage={errors.answerImageUrl?.errorMessage}
          hasError={errors.answerImageUrl?.hasError}
          ref={answerImageUrlRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "answerImageUrl")}
        ></TextField>
      </ArrayField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Created at</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer,
              level,
              dueDate,
              questionImageUrl,
              answerImageUrl,
              createdAt: value,
              updatedAt,
              deletedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Updated at</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer,
              level,
              dueDate,
              questionImageUrl,
              answerImageUrl,
              createdAt,
              updatedAt: value,
              deletedAt,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <TextField
        label="Deleted at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={deletedAt && convertToLocal(new Date(deletedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              channelId,
              question,
              answer,
              level,
              dueDate,
              questionImageUrl,
              answerImageUrl,
              createdAt,
              updatedAt,
              deletedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.deletedAt ?? value;
          }
          if (errors.deletedAt?.hasError) {
            runValidationTasks("deletedAt", value);
          }
          setDeletedAt(value);
        }}
        onBlur={() => runValidationTasks("deletedAt", deletedAt)}
        errorMessage={errors.deletedAt?.errorMessage}
        hasError={errors.deletedAt?.hasError}
        {...getOverrideProps(overrides, "deletedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
