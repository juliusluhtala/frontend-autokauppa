import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function AddCar(props){

    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({ brand: '', model: '', color: '', fuel: '', modelYear: '', price: '' });

    const handleSave = () => {
        props.saveCar(car);
        setOpen(false);
        setCar({ brand: '', model: '', color: '', fuel: '', modelYear: '', price: '' })
    }
                
    return (
        <>
            <Button onClick={() => setOpen(true)}>Add Car</Button>
            <Dialog
            open={open}>
            <DialogTitle> New Car
            </DialogTitle>
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
                <Button onClick={() => handleSave()}>Save</Button>
                <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogActions>
            </Dialog>
        </>
    );
}