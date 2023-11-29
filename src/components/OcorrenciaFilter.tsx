import Search from "@mui/icons-material/Search";
import {
    Button,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";

import { useState } from "react";

const OcorrenciaFilter = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-orange-main w-full text-white text-center py-4 rounded">
        Status da Ocorrência
      </div>
      <Card variant="elevation" sx={{ padding: "1em" }}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Card>
      <div className="bg-orange-main w-full text-white text-center py-4 rounded">
        Tipos de Ocorrência
      </div>
      <Card variant="elevation" sx={{ padding: "0 1em" }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel control={<Checkbox />} label="Lixo" />
          <FormControlLabel control={<Checkbox />} label="Assalto" />
          <FormControlLabel
            control={<Checkbox />}
            label="Bueiro sem proteção"
          />
          <FormControlLabel control={<Checkbox />} label="Placa danificada" />
          <FormControlLabel control={<Checkbox />} label="Banco danificado" />
          <FormControlLabel control={<Checkbox />} label="Calçada danificada" />
        </FormGroup>
      </Card>
      <Button
        color="warning"
        size="large"
        variant="contained"
        sx={{ margin: "1em 0" }}
      >
        <Search />
      </Button>
    </div>
  );
};

export default OcorrenciaFilter;
