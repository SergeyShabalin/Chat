import {Stack} from "@mui/material";
import {AppProvider} from './Store/Context'

import Chat from "./Chat";

export default function App() {

    return (
        <AppProvider>
            <Stack textAlign="center">
                <Chat/>
            </Stack>
        </AppProvider>
    );
}
