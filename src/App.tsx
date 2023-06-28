import { Stack, Typography, Switch } from '@mui/material';
import LanguageSwitch from './components/LanguageSwitch';
import PageRoutes from './routes/PageRoutes';
import { useState } from 'react';
import axios from 'axios';
import LanguageTranslatorFormSlide from './try/AlertDialogSlide';

export default function App() {
  // const [open, setOpen] = useState(false);
  return (
    <PageRoutes />
  );
}

/*
REACT USES SPRINGBOOT FOR TRANSLATING LANGUAGE

    <Stack direction="row" spacing={1} alignItems="center" paddingRight={2}>
            <Typography>English</Typography>
                <Switch color="default" onClick={
                  async () => {
                    
                        setSwitchToEnglish(!switchToEnglish);
                        if (switchToEnglish) {
                          const { data } = await axios.get("http://localhost:8080/api/v2/languages/en");
                          console.log(data);
                        } else {
                          const { data } = await axios.get("http://localhost:8080/api/v2/languages/jp");
                          console.log(data);
                        }
                        
                    }
                }/>
            <Typography>日本語</Typography>
        </Stack>
*/