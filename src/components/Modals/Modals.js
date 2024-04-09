import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import uploadIcon from './upload.png';
import '../../assest/AIACHomePageIMG/upload.png'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
};

export default function Modals() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modalWrapper">
                        <div className='modal'>
                            <img src={uploadIcon} alt="" />
                            <h2>Drag and Drop File <br /> Or</h2>
                            <button>Browse File</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}