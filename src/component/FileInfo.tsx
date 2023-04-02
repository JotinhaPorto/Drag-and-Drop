import { IoMdLink } from 'react-icons/io'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'

type Props = {
    files: any[];
    onDelete: (files: any) => void
}

export const FileInfo = ({ files, onDelete }: Props) => {
    return (
        <ul className=' p-5 bg-[#1F1F1F] rounded-lg mt-4'>
            {files.map((uploadedFiles) => (
                <li key={uploadedFiles.id} className='flex justify-between pt-5'>
                    <div className='flex items-center'>
                        <div className={`bg-center bg-cover w-10 h-10 mr-3 bg-no-repeat rounded-lg`} style={{ backgroundImage: `url(${uploadedFiles.preview})` }}></div>
                        {/* <img src={uploadedFiles.preview} alt="" className='w-12 h-12 rounded-md bg-cover pr-3' /> */}
                        <div className='flex flex-col'>
                            <strong className='text-[#E5E5E5] text-[15px]'>{uploadedFiles.name}</strong>
                            <span className='text-[#898989] hover:text-[#c5c5c5bb]'>{uploadedFiles.sizeFormated}
                                <button onClick={() => onDelete(uploadedFiles.id)} className="text-[#F64348] pl-4 text-[14px]">Excluir</button>
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>


                        {uploadedFiles.sizeCommon < 5000000 &&
                            <a href={uploadedFiles.preview} target="_blank" className='w-10 text-[#898989] hover:text-[#c5c5c5bb]'>
                                <IoMdLink className='transition-all duration-500 hover:scale-125' size={24} />
                            </a>}


                        {uploadedFiles.sizeCommon > 5000000 ?
                            <BiErrorCircle size={24} color="red" />
                            :
                            <AiFillCheckCircle className=' text-green-500 hover:text-green-300 ' size={24} />}
                    </div>
                </li>
            ))}
        </ul>
    )
}