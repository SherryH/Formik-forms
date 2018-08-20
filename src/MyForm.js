import React from 'react';

import { Formik, Field, Form } from 'formik';

// A Field is by default an input,
// <Field component="select" /> it becomes a select
// if use basic <input />, the values are not captured inside
const AForm = ({ values }) => (
    <Form>
        <h1>A Form</h1>
        <label htmlFor="name"> Name </label>
        <Field name="name" placeholder="John" />
        <label htmlFor="email"> Email</label>
        <Field name="email" placeholder="abc@gmail.com" />
        <Select name="gender" label="Gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="tbc">Not to be disclosed</option>
        </Select>
        <Checkbox
            type="checkbox"
            name="agreebox"
            text="Please tick to agree"
            checked={values.agreebox}
        />
        <button type="submit">Submit</button>
    </Form>
);

const MyForm = () => (
    <Formik
        initialValues={{
            name: 'Martin',
            email: '',
            agreebox: true,
            gender: 'tbc'
        }}
        onSubmit={values => {
            alert(`MyForm values,${JSON.stringify(values, null, 2)}`);
            console.log('values', values);
        }}
        render={AForm}
    />
);

// <select>{children}</select> also works.
// <select {...rest}/> is more generic
// to get the values for select.options, pass {...field} to select
const Select = ({ name, label, ...rest }) => {
    return (
        <React.Fragment>
            <Field
                name={name}
                render={({ field, form }) => {
                    // console.log('field', JSON.stringify(field));
                    // console.log('form', JSON.stringify(form));
                    return (
                        <div>
                            <label htmlFor={name}>{label}</label>

                            <select {...field} {...rest} />
                        </div>
                    );
                }}
            />
        </React.Fragment>
    );
};

// const Select = ({ name, label, ...rest }) => (
//     <Field
//         name={name}
//         render={({ field, form }) => {
//             const error = form.touched[name] && form.errors[name];
//             const classes = error ? 'fieldset fieldset--error' : 'fieldset';
//             return (
//                 <div className={classes}>
//                     <label htmlFor={name}>{label}</label>
//                     <select {...field} {...rest} />
//                     {form.errors[name] &&
//                         form.touched[name] && (
//                             <div className="field-error">
//                                 {form.errors[name]}
//                             </div>
//                         )}
//                 </div>
//             );
//         }}
//     />
// );

const Checkbox = ({ name, label, text, ...rest }) => {
    console.log('checkbox rest', JSON.stringify(rest));
    return (
        <React.Fragment>
            <label htmlFor={name}>{label}</label>
            <Field name={name} type="checkbox" {...rest} />
            <p>{text}</p>
        </React.Fragment>
    );
};

export default MyForm;
