import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    rows: number;
    label?: string;
}

export default function MyTextArea (props: Props) {
    const [field, meta] = useField(props.name);

    return (
        //!! or double negation makes the property a boolean first and negates its value 
        //on the first !, then inverts it again on the second !  
        <Form.Field error={!!meta.error && meta.touched}>
            <label>{props.label}</label>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </Form.Field>

    )
}