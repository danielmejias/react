import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/Grid.css'

const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                // border: '1px solid',
                // borderColor: (theme) =>
                //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}

            sx2={{
                // border: '1px solid',
                // borderColor: (theme) =>
                //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700'
            }}
        />
    );
}

export const Grid = () => {
    let textExample = `Before we dive into paragraph structure, let’s start with paragraph meaning. A paragraph is an individual segment of writing that discusses a central idea, typically with more than one sentence. It even has its own paragraph symbol in copyediting, called the pilcrow (¶), not to be confused with the section symbol called the silcrow (§) that’s common in legal code.`

    return (
        <div >
            <Box
                sx={{
                    display: 'grid',
                    // columnGap: 1,
                    // rowGap: 1,
                    // alignItems: 'flex-start',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
                <Item>{textExample}</Item>
                <Item>{textExample}</Item>
            </Box>
            <Box >
                <Item><TextField id="outlined-basic" label="Name" variant="outlined" /></Item>
                <Item><TextField id="outlined-basic" label="Email" variant="outlined" /></Item>
            </Box>
            <Box display="flex"
                justifyContent="center">
                <Item>
                    <Button variant="contained" >Contained</Button>
                    <Button variant="contained" >Contained</Button>
                </Item>
            </Box>

        </div>
    );
}