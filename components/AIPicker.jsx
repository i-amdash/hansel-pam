import React from 'react';
import CustomButton from './CustomButton'; 

const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit
}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='ask ai... '
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicket-textarea text-black'
      />
      <div className='flex flex-wrap gap-3'>
        { generatingImg ? (
          <CustomButton 
            type='outline'
            title="asking ai..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="ai logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-sm"
            />

            <CustomButton 
              type="filled"
              title="ai full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker;