import { useField } from "formik";
import React from "react";
import { Form, Label, Select } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

export default function MySelectInput (props: Props) {
    //helpers -> will help us manually set the touched status and value
    const [field, meta, helpers] = useField(props.name);

    return (
        //!! or double negation makes the property a boolean first and negates its value 
        //on the first !, then inverts it again on the second !  
        <Form.Field error={!!meta.error && meta.touched}>
            <label>{props.label}</label>
            <Select
                clearable
                options={props.options}
                value={field.value || null}
                //e-> event, d -> data
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
            />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </Form.Field>

    )
}