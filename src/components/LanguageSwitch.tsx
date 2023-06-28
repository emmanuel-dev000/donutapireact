import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function LanguageSwitch() {
    const [switchToEnglish, setSwitchToEnglish] = useState(false);
    return (
        <Stack direction="row" spacing={1} alignItems="center" paddingRight={2}>
            <Typography>English</Typography>
                <Switch color="default" onClick={
                    () => {
                        setSwitchToEnglish(!switchToEnglish);
                    }
                }/>
            <Typography>日本語</Typography>
        </Stack>
    );
}