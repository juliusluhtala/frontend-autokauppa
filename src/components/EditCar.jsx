import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function EditCar(props){

    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({ brand: '', model: '', color: '', fuel: '', modelYear: '', price: '' });

    const handleDialogOpen = () => {
        console.log(props.params.data);
        setCar(
            {   brand: props.params.data.brand, 
                model: props.params.data.model, 
                color: props.params.data.color, 
                fuel: props.params.data.fuel, 
                modelYear: props.params.data.modelYear, 
                price: props.params.data.price });
        setOpen(true);
    }

    return (
        <>
        <Button onClick={() => handleDialogOpen()}>Edit</Button>
        <Dialog
            open={open}>
            <DialogTitle>Edit</DialogTitle>
            <DialogContent>
                <TextField
                    label='Brand'
                    value={car.brand}
                    onChange={event => setCar({...car, brand: event.target.value})}
                    variant="standard"
                    margin="dense"
                    fullWidth
                />
                <TextField
                    label='Model'
                    value={car.model}
                    onChange={event => setCar({...car, model: event.target.value})}
                    variant="standard"
                    margin="dense"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button>Save</Button>
                <Button onClick={() => setOpen(close)}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}