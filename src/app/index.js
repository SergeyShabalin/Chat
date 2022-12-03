import {Stack} from "@mui/material";
import {Context} from "./Store/Context";
import Chat from "./Chat";
import Store from "./Store";

export default function App() {

    const store = Store()
    return (
        <Context.Provider value={store}>
            <Stack textAlign="center">
                <Chat/>
            </Stack>
        </Context.Provider>
    );
}
