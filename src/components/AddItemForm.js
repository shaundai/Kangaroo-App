import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form'

let renderField = () => {
    return (
        <View>
            <Text>Name</Text>
            <TextInput
            name="inputName"
            placeholder='insert test text'
            type="text"
            onSubmitEditing={(text)=>{console.log(text)}}
            />
            <TouchableOpacity title='real submit' type="submit" onPress={(e)=>console.log(e)}></TouchableOpacity>
        </View>
    )
}

const ContactComponent = () => {
    return (
        <View>
            <Text>here's some text</Text>
            <Field label='Username:' component={renderField} name='Username' ></Field>
            <TouchableOpacity type="submit" onPress={(e)=>{console.log(e)}}><Text>Submit</Text></TouchableOpacity>
        </View>
    )
}

const ContactForm = reduxForm({
  form: 'contact'
})(ContactComponent)

export default ContactForm;
