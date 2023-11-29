import Delete from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";

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
    copy.splice(index, 1)
    setFile(copy)
  }

  return (
    <div className="w-full flex flex-col p-2">
      <FileUploader  multiple={true} handleChange={handleChange} />
      <div className="flex flex-col w-full">
        {file &&
          file.map((f, i) => (
            <div className="flex justify-between items-center w-full px-3 m-2" key={i}>
              <p>{f.name}</p>
              <Button variant="contained" color="error" onClick={() => handleDelete(i)}>
                <Delete />
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
