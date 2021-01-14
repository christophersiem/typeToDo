
import 'styled-components';


declare module 'styled-components/macro' {
    export interface DefaultTheme {
        borderRadius: string;
        colors: {
            main: string;
            secondary: string;
        };
    }
}
