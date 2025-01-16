import React, { useContext } from 'react'
import styles from './ImageCon.module.css'
import { UserContext } from '../App'
import loadingImg from '../assets/loading.gif'
import celebrationImg from '../assets/celebration.gif'
const ImageCon = () => {
    const {celebration,loading , showText , imgUrl} = useContext(UserContext);
  return (
        <div className={styles.img_box}>
         {
            showText ?  <h1>Hey There ! <span>how can i Help you!</span></h1> : null
         }
         {
            loading ? <div>
                <img className={styles.loading} src={loadingImg} alt="" />
                 <h3>Loading...</h3>
            </div> :  
            <img className={styles.res_img} src={imgUrl} alt="" />
         }

         {
          celebration ? <img className={styles.cele} src={celebrationImg} alt="" /> : null
        
         }

         </div>
  )
}

export default ImageCon