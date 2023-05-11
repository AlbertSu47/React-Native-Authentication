import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/logo_black.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-dynamic-vector-icons';
import { Icon } from 'react-native-elements'

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    // const API_URL = 'http://13.208.146.112:8000/api';

    const onSignInPressed = () => {
        //console.warn('Sign in');
        //validate user
        // fetch(API_URL+'/auth/login/', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       email: 'hello123',
        //       password: '123',
        //     }),
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        //       // Handle response data
        //       //setUsername(data)
        //       //setPassword(data)
        //       console.log(data)
        //       navigation.navigate('Home' as never);
        //     })
        //     .catch((error) => {
        //       // Handle error
        //       console.error(error);
        //     });

        navigation.navigate('Home' as never);
    };

    const onForgotPasswordPressed = () => {
        // console.warn('onForgotPasswordPressed');
        navigation.navigate('ForgotPassword' as never);
    };

    const onSignUpPressed = () => {
        //console.warn("onSignUpPressed");
        navigation.navigate('SignUp' as never);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='contain'
                />
                {/* <View> */}
                    {/* <Icon name='apple' type='material-community' size={20} color='#C0C0C0' /> */}
                    <CustomInput
                        placeholder="example@mail.com"
                        placeholderTextColor='#C0C0C0'
                        value={username}
                        setValue={setUsername}
                    />
                {/* </View> */}
                
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomButton text="Sign In" onPress={onSignInPressed} />

                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton
                    text="Don't have an account? Creat one"
                    onPress={onSignUpPressed}
                    type="TERTIARY"
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100,
    },
    // container: {
    //     width: 400,
    //     backgroundColor: '#F0F0F0',
    //     borderRadius: 10,
    //     marginVertical: 5,
    // },

});

export default SignInScreen