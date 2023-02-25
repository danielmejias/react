import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'



export const Mode = (props) => {
    return (
        <Stack spacing={10} direction='row' justifyContent='right'>
            <Button>
                <img
                    className={props.className}
                    onClick={props.onClick}
                    src={props.src}
                    alt={props.alt}
                    height={props.height}
                />
            </Button>
        </Stack>
    )
}
