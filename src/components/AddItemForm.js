import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form'
//TODO deletedis
const inputField = ({label, name, placeholder}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                name={name}
                placeholder={placeholder}
                type="text"
                ref={React.createRef()}
                onSubmitEditing={e => console.log('ref')}
            />
            <Button title='try me' type='submit' onPress={console.log('hi')}></Button>
        </View>
    )
}

const ContactComponent = (props) => {
    const { handleSubmit } = props;
    return (
        <View>
            <Field label='Username:' component={inputField} name='Username' placeholder='Name'></Field>
            <TouchableOpacity type="submit" onPress={handleSubmit}><Text>Submit</Text></TouchableOpacity>
        </View>
    )
}

const ContactForm = reduxForm({
  form: 'contact'
})(ContactComponent)

export default ContactForm;
