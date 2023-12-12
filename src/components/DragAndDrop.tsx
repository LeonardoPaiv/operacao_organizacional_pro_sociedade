import Delete from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { blobToBase64, downloadFromBase64, fileToBlob } from "../helpers/arquivo";

const DragAndDrop = ({
  file,
  setFile,
}: {
  file: File[];
  setFile: (value: React.SetStateAction<File[]>) => void;
}) => {
  const handleChange = (files: FileList) => {
    const newArray: File[] = [];
    for (let index = 0; index < files.length; index++) {
      let arquivo = files.item(index);
      if (arquivo) {
        newArray.push(arquivo);
      }
    }
    setFile((prev) => [...prev, ...newArray]);
  };

  const handleDelete = (index: number) => {
    const copy = [...file];
    copy.splice(index, 1);
    setFile(copy);
  };

  const downloadFile = async (file: File) => {
    const blob = await fileToBlob(file);
    const base64String = await blobToBase64(blob);
    downloadFromBase64(base64String.slice(base64String.indexOf(',') + 1, -1), 'joao.pdf')
  };

  return (
    <div className="w-full flex flex-col p-2">
      <FileUploader multiple={true} handleChange={handleChange} />
      <div className="flex flex-col w-full">
        {file &&
          file.map((f, i) => (
            <div
              className="flex justify-between items-center w-full px-3 m-2"
              key={i}
            >
              <p onClick={() => downloadFile(f)}>{f.name}</p>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(i)}
              >
                <Delete />
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
