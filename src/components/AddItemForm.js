import React from 'react';
import { Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form'

let renderField = () => {
    return (
        <View>
            <Text>cool stuff</Text>
            <TextInput name="inputName" placeholder='we could be great' type="text" />
        </View>
    )
}

const ContactComponent = () => {
    return (
        <View>
            <Text>here's some text</Text>
            <Field label='Username:' component={renderField} name='Username' ></Field>
            <TouchableOpacity onPress={(e) => console.log(e)}><Text>Submit</Text></TouchableOpacity>
        </View>
    )
}

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactComponent)

export default ContactForm;
