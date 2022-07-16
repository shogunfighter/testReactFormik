import React from "react";
import Input from "./control/Input";
import TextArea from "./control/TextArea";
import Select from "./control/Select";
import RadioButtons from "./control/RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./control/DatePicker";
import ChakraInput from "./control/ChakraInput";

function FormikControl(props) {
    const {control, ...rest} = props;
    switch (control) {
        case 'input': return <Input {...rest}/>
        case 'textarea': return <TextArea {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio': return <RadioButtons {...rest} />
        case 'checkbox': return <CheckboxGroup {...rest} />
        case 'date': return <DatePicker {...rest} />
        case 'chakrainput': return <ChakraInput {...rest} />
        default: return null;
    }
};

export default FormikControl;