import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';


export default function MyDateInput(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);

    return (
        //!! or double negation makes the property a boolean first and negates its value 
        //on the first !, then inverts it again on the second !  
        <Form.Field error={!!meta.error && meta.touched}>
            <DatePicker
                {...field}
                {...props}
                //asserting the selected/onchange  props will overwrite the selected prop in the {...props}
                //date-picker uses the JS Date Object, that's why new Date()
                selected={field.value && new Date(field.value) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </Form.Field>

    )
}