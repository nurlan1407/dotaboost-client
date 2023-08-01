import React, { FC } from 'react'
import cls from './mainPage.module.scss'
import HeroSection from 'widgets/heroSection/ui/heroSection';
import { log } from 'console';

interface MainPageProps {
  
}

const MainPage: FC<MainPageProps> = ({  }) => {
  const [state, setState] = React.useState(0)
  const add =(e:React.ChangeEvent<HTMLInputElement>) =>{
    if(parseInt(e.target.value)===state1){
      console.log("IDINAX");
      
      return
    }
    setState(parseInt(e.target.value))
    const newWidth = (Math.abs((state1 - state)) * 550)/6000
    const fill = document.querySelector('.divLowerFill')
    const divLowerFill = fill as HTMLElement
    const moveToLeft = state *550 /6000
    divLowerFill.style.left = moveToLeft+"px"
    divLowerFill.style.width = newWidth + "px"
    // paintArea(state,state1)
  }
  const [state1, setState1] = React.useState(0)
  const add1 =(e:React.ChangeEvent<HTMLInputElement>) =>{
    
    setState1(parseInt(e.target.value))

    const newWidth = (Math.abs((state1 - state)) * 550)/6000
   
    
    const fill = document.querySelector('.divLowerFill')
    const divLowerFill = fill as HTMLElement
    divLowerFill.style.width = newWidth + "px"
    
  }  
  return (
    <div className={cls.mainPage}>
        <HeroSection/>
        <div className={cls.mmrContainer}>
        <h1 id="rangeValue"></h1>

<div className="range">
  <div className="divFill"></div>
  <div className="divLowerFill"></div>
  <input type="range" className='lox' min="0" max="6000" step="20" value={state} onChange={(e)=>add(e)}/>
  {/* <div style={{left:"20%", width:"26%", backgroundColor:"red", position:"absolute", height:"10px"}}></div> */}
  <input type="range"  className="input1" min="0" max="6000" step="20" value={state1} onChange={(e)=>add1(e)} />
</div>
<ul className ="range-labels">
  <li className="active selected">0</li>
  <li onClick={()=>setState(1000)}>1000</li>
  <li onClick={()=>setState(2000)}> 2000</li>
  <li onClick={()=>setState(3000)}>3000</li>
  <li onClick={()=>setState(4000)}>4000</li>
  <li onClick={()=>setState(5000)}>5000</li>
  <li onClick={()=>setState(6000)}>6000</li>
</ul>
        </div>
    </div>
  )
}

export default MainPage;