import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
  Grid,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Badge,
} from '@mui/material';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      width={100}
      height={100}
      gap={5}
    >
      <AppBar position="fixed" color="secondary">
        <Toolbar color="warning">
          <Typography variant="h2" color={'ButtonText'}>
            hyee
          </Typography>
          <Typography variant="subtitle2">hiii</Typography>
        </Toolbar>
      </AppBar>
      <Stack
        spacing={2}
        marginTop={'250px'}
        justifyContent={'center'}
        width={100}
        height={100}
        alignItems={'center'}
      >
        <FormControl>
          <Badge badgeContent={name.length} color="warning" />
          <TextField
            id="name"
            label="Your name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            size="small"
            color="primary"
          />
          <FormHelperText>You kind name here he/she</FormHelperText>
        </FormControl>

        <Button variant="outlined" onClick={(e) => null}>
          Hello World
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
