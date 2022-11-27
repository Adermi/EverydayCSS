import React, { useRef, useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [dragFile, setDragFile] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [font, setFont] = useState('上传文件');
  const file = useRef(null);

  function handleFileEnter() {
    if (dragFile) return;
    setDragFile(true);
  }

  function handleFileLeave() {
    if (!dragFile) return;
    setDragFile(false);
  }

  function handleFileDrop() {
    handleFileLeave();
    setFileName(file.current.files[0].name);
  }

  function startUpload() {
    if (loading || uploadSuccess) return;
    setLoading(true);
    setFont('上传中...');
    setTimeout(() => {
      setUploadSuccess(true);
      setLoading(false);
      setFont('上传成功');
    }, 3000);
  }

  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.uploadCom}>
          <div className={style.head}>Drop file to upload</div>
          <div
            className={cn(style.bar, {
              [style.active]: loading || uploadSuccess,
            })}
            style={{
              '--time': 3,
            }}
          ></div>
          <div className={style.content}>
            <img
              src="https://100dayscss.com/codepen/checkmark.svg"
              alt=""
              className={cn(style.doneImg, {
                [style.active]: uploadSuccess,
              })}
            />
            <img
              src="https://100dayscss.com/codepen/syncing.svg"
              alt=""
              className={cn(style.loadImg, {
                [style.active]: loading,
              })}
            />
            <div
              className={cn(style.dropBox, {
                [style['is-drag']]: dragFile,
                [style.active]: loading || uploadSuccess,
              })}
              onDragEnter={handleFileEnter}
              onDragOver={handleFileEnter}
              onDragLeave={handleFileLeave}
              onDragEnd={handleFileLeave}
              onDrop={handleFileLeave}
            >
              <span className={style.fileName}>{fileName}</span>
              {fileName == null && (
                <img
                  src="https://100dayscss.com/codepen/upload.svg"
                  alt=""
                  className={style.upload}
                />
              )}
              <input
                type="file"
                className={style.uploadIpt}
                ref={file}
                onChange={handleFileDrop}
              />
            </div>
            <div className={style.uploadBtn} onClick={startUpload}>
              {font}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
