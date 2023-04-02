import { useState } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'

type Props = {
    onUpload: (files: any) => void
}

export const Upload = ({ onUpload }: Props) => {



    const onDrop = (files: any) => {
        onUpload(files)
    }



    const dropZone = useDropzone({
        onDrop,
        maxFiles: 5,
        accept: {
            'image/*': ['.jpeg', '.png']
        }
    })


    const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
        if (!isDragActive) {
            return <p className='text-center py-4 '>Clique aqui ou arraste uma imagem</p>
        }
        if (isDragReject) {
            return <p className='text-red-600 text-center py-4 '>Arquivo não suportado</p>
        }
        return <p className='text-center py-4 text-green-600 '>Solte o arquivo aqui</p>
    }

    const { getRootProps, getInputProps, isDragActive, isDragReject } = dropZone

    return (
        <div {...getRootProps()} className="bg-gray-50 min-w-[290px] sm:min-w-[500px] h-auto rounded-lg p-5 cursor-pointer">
            <div className={`border-2 border-dashed ${isDragActive ? 'border-green-600' : 'border-gray-600'} ${isDragReject ? 'border-red-600' : 'border-gray-600'}`}>
                {renderDragMessage(isDragActive, isDragReject)}
            </div>
            <input {...getInputProps()} className='hidden' />
        </div>
    )

}


// getRootProps => a gente pega as props de upload que vão possibilitar que a gente arraste algo p o nosso elemento
// getInputProps => a gente pega as props do dropzone 