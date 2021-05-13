// import React, { useState } from 'react';
// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// }

// const ProfileImg = () => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState('');

//   const handleChange = (info) => {
//     if (info.file.status === 'uploading') {
//       setLoading(!loading);
//       return;
//     }
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, (imageUrl) => {
//         setImageUrl(imageUrl);
//         setLoading(false);
//       });
//     }
//   };

//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <Upload
//       name='avatar'
//       listType='picture-card'
//       className='avatar-uploader'
//       showUploadList={false}
//       action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
//       beforeUpload={beforeUpload}
//       onChange={handleChange}
//     >
//       {imageUrl ? (
//         <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
//       ) : (
//         uploadButton
//       )}
//     </Upload>
//   );
// };

// export default ProfileImg;

import React, { useState } from 'react';
import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';

const UploadProfile = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    // <ImgCrop rotate>
    <Upload
      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
      listType='picture-card'
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      {fileList.length < 5 && '+ Upload'}
    </Upload>
    // </ImgCrop>
  );
};

export default UploadProfile;
