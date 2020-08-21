import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex: 1;
    background: #FFF;
`;

export const BackgroundImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const Logo = styled.Image`
    position: absolute;
    left: 5.89%;
    right: 45.51%;
    top: 17.44%;
    bottom: 62.29%;
`;


export const About = styled.View`
    position: absolute;
    width: 254px;
    height: 194px;
    left: 33px;
    top: 331px;
`;

export const SpanTitle = styled.Text`
    font-family: Roboto_300Light_Italic;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;

    margin-bottom: 5px;

    color: #22215B;
`;

export const Title = styled.Text`
    font-family: Roboto_700Bold;
    font-style: normal;
    font-size: 38px;
    line-height: 45px;

    color: #22215B;

    margin-bottom: 10px;
`;

export const Description = styled.Text`
    font-family: Roboto_500Medium;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;

    color: #7B7F9E;
`;

export const Buttons = styled.View`
    padding: 12px 0px;
    position: absolute;
    left: 7.47%;
    right: 7.47%;
    top: 73.17%;
`;

export const Button = styled.TouchableOpacity`
    margin: 10px 0;
    padding: 15px;

    background: #567DF4;
    border-radius: 10px; 
`;

export const TextButton = styled.Text`
    font-family: Roboto_400Regular;
    font-size: 16px;
    color: #FFF;
    flex: none;
    align-self: center;
`;