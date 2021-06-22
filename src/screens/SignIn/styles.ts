import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";

export const Banner  = styled.Image`
    width: 100%;
    margin-top: 8%;
`;

export const WrapperMain =  styled.View`
    transform: translateY(-50px);
`;

export const Subitle =  styled.Text`
    color: ${colors.textlight};
    text-align: center;
    font-size: 15px;
    margin-top: 16px;
`;

export const WrapperButton =  styled.View`
    margin: 48px 30px 0 30px;
`;
