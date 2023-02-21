import {createGlobalStyle} from 'styled-components';
import Poppins from './Poppins-Regular.ttf';
import PoppinsBold from './Poppins-Bold.ttf';
import Roboto from './Roboto-Regular.ttf';
import RobotoBlack from './Roboto-Black.ttf';
export default createGlobalStyle`
    
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), url(${Poppins});
        font-style: normal;
    };

    @font-face {
        font-family: 'PoppinsBold';
        src: local('PoppinsBold'), url(${PoppinsBold});
        font-style: normal;
    };

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${Roboto});
        font-style: normal;
    }

    @font-face {
        font-family: 'RobotoBlack';
        src: local('RobotoBlack'), url(${RobotoBlack});
        font-style: normal;
    }



`;