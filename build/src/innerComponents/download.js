import React from 'react';

//prop types
import {downloadPropTypes} from '../spec/propTypes'

const Download = (props) => {
  let {
    handleHoverOver,
    handleHoverOut,
    iconSize,
    handleDownload,
    downloadHover,
    downloadIcon,
    downloadHoverIcon
  } = props;

  return (
    <div
      id="download"
      onMouseOver={e => handleHoverOver(e, 'download')}
      onMouseLeave={e => handleHoverOut(e, 'download')}
      onClick={handleDownload}
      >
      <img 
        id="download-icon"
        style={{
          height: iconSize
        }}
        src={downloadHover
          ? downloadHoverIcon
          : downloadIcon}/>
    </div>
  )
}

Download.propTypes = downloadPropTypes;

export default Download;