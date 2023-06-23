import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import DonutFormPopup from "../components/DonutFormPopup";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

  
export default function Try() {
    const [open, setOpen] = useState(false);
    const openState = () => setOpen(true); 
    const closeState = () => setOpen(false); 
    return (
        <>
            {/* <Button onClick={openState}>Modal</Button>
            <Modal
                open={open}
                onClose={closeState}
                >
                    <Box sx={style}>
                        <Typography>
                            {"Modal"}
                        </Typography>
                        <Button onClick={closeState}>
                            Close
                        </Button>
                    </Box>
                
            </Modal> */}
            <DonutFormPopup/>
        {/* <BasicModal></BasicModal> */}
        </>
    );
}