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
} from "@mui/material";

import { useFormik } from "formik";
import { IOcorrencia } from "../Models/IOcorrencia";
import { status } from "../enums/status";
import { constultarOcorrencia } from "../service/ocorrencia";

const OcorrenciaFilter = ({
  setOcorrencias,
}: {
  setOcorrencias: React.Dispatch<React.SetStateAction<IOcorrencia[]>>;
}) => {
  const formFiltro = useFormik<{ status: number; tipo: number[] }>({
    initialValues: {
      status: 1,
      tipo: [],
    },
    onSubmit: async (data) => {
      const res = await constultarOcorrencia(0, {status: data.status.toString(), tipo: data.tipo.toString()});
      setOcorrencias(res)
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      formFiltro.setFieldValue("tipo", [
        ...formFiltro.values.tipo,
        Number(e.target.value),
      ]);
    } else {
      formFiltro.setFieldValue("tipo", [
        ...formFiltro.values.tipo.filter(
          (number) => number !== Number(e.target.value)
        ),
      ]);
    }
  };

  return (
    <form onSubmit={formFiltro.handleSubmit}>
      <div className="flex flex-col">
        <div className="bg-orange-main w-full text-white text-center py-4 rounded">
          Status da Ocorrência
        </div>
        <Card variant="elevation" sx={{ padding: "1em" }}>
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              value={formFiltro.values.status}
              label="Status"
              onChange={(e) =>
                formFiltro.setFieldValue("status", e.target.value)
              }
            >
              <MenuItem value={status.Criado}>Criado</MenuItem>
              <MenuItem value={status["Em Atendimento"]}>
                Em Atendimento
              </MenuItem>
              <MenuItem value={status.Finalizado}>Finalizado</MenuItem>
            </Select>
          </FormControl>
        </Card>
        <div className="bg-orange-main w-full text-white text-center py-4 rounded">
          Tipos de Ocorrência
        </div>
        <Card variant="elevation" sx={{ padding: "0 1em" }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(1)}
                  value={1}
                />
              }
              label="Lixo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(2)}
                  value={2}
                />
              }
              label="Buraco em pista"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(3)}
                  value={3}
                />
              }
              label="Assalto"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(4)}
                  value={4}
                />
              }
              label="Bueiro sem proteção"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(5)}
                  value={5}
                />
              }
              label="Placa danificada"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(6)}
                  value={6}
                />
              }
              label="Banco danificado"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(7)}
                  value={7}
                />
              }
              label="Calçada danificada"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleChange(e)}
                  checked={formFiltro.values.tipo.includes(8)}
                  value={8}
                />
              }
              label="Outros"
            />
          </FormGroup>
        </Card>
        <Button
          color="warning"
          size="large"
          variant="contained"
          sx={{ margin: "1em 0" }}
          type="submit"
        >
          <Search />
        </Button>
      </div>
    </form>
  );
};

export default OcorrenciaFilter;
