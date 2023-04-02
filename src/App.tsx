import { useState } from "react"
import { FileInfo } from "./component/FileInfo"
import { Upload } from "./component/Upload"
import { v4 as uuidv4 } from "uuid";
import { filesize } from "filesize";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
const App = () => {



  const [uploadedFiles, setUploadedFiles] = useState<any>([])


  const handleUpload = (files: File[]) => {
    const uploadedFile = files.map(file => ({
      file,
      id: uuidv4(),
      sizeCommon: file.size,
      sizeFormated: filesize(file.size),
      name: file.name,
      preview: URL.createObjectURL(file),

    }))

    if (uploadedFiles.length <= 4) {

      let moreThan5mb = uploadedFile.every(item => item.sizeCommon > 5000000)
      console.log(moreThan5mb)
      if (moreThan5mb === true) {
        toast.error('Item maior que 5mb')
      } else {
        toast.success('Foto adicionado com sucesso')
      }
      setUploadedFiles(uploadedFiles.concat(uploadedFile))
    } else {
      toast.error('Não podemos ter mais que 5 arquivos')
      return uploadedFiles
    }

  };

  const handleDelete = (id: string) => {
    let tmpUploadedFiles = [...uploadedFiles]
    setUploadedFiles(tmpUploadedFiles.filter((file: { id: string | boolean }) => file.id !== id));
    toast.success('Foto excuida com sucesso')
  }


  return (
    <div className="bg-[#343434] min-h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length &&
          <FileInfo files={uploadedFiles} onDelete={handleDelete} />
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
