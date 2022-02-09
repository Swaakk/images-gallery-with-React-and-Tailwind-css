import React from 'react'

function CardImages({image}) {
  return (
    
    <div className='max-w-sm my-10 rounded overflow-hidden shadow-lg sm:grid-cols-2'>
      <img className='w-full' src={image.webformatURL} alt="" />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by : {image.user}
        </div>
          <ul className='font-bold'>
            <li>Views : {image.views}</li>
            <li>Downloads : {image.downloads}</li>
            <li>Likes: {image.likes}</li>
          </ul>
            <div className='px-6 py-4'>
              <div className='inline-block bg-gray-500 rounded-full px-3 py-1 font-semibold text-gray-200 mr-2'>
                  #tag1
              </div>

            </div>
      </div>
    </div>
    
  )
}

export default CardImages