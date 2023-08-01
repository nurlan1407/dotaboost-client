import React, { FC } from 'react'
import cls from './mainPage.module.scss'
import HeroSection from 'widgets/heroSection/ui/heroSection';

interface MainPageProps {

}

const MainPage: FC<MainPageProps> = ({ }) => {
  const [state, setState] = React.useState(1000)
  const [state1, setState1] = React.useState(5000)
  React.useEffect(()=>{
    fillSlider(state,state1)
  }, [state, state1] )


  const add = (term :string) => {
    const value = parseInt(term)
    if (value <= state1) {
      setState(value)
    } else {
      setState((state1 - 100))
    }
    
  }
  const add1 = (term: string) => {
    const value = parseInt(term)
    if (value >= state) {
      setState1(value)
    } else {
      setState1(state + 100)
    }
  }


  const fillSlider =(first:number, second:number)=> {
    //обьект трека и ширина
    const divFill = document.querySelector('.divFill') as HTMLElement
    const firstQuartile = first; // первый промежуток
    const middleQuartile = Math.abs(second - first) //второй промежуток
    const w = (middleQuartile/6000)*100
    const thirdQuartile = 6000 - second // третий промежуток
    const firstpr = (firstQuartile/6000)*100
    const secondpr = (thirdQuartile/6000)*100
    divFill.style.width = w +"%";
    divFill.style.left = firstpr +"%";
    divFill.style.right = secondpr +"%";
  }

  function onLiClicked(clickedValue:number){
    if(Math.abs(state - clickedValue) > Math.abs(state1 - clickedValue)){
      add1(clickedValue.toString())
    }else{
      add(clickedValue.toString())
    }
  }




  return (
    <div className={cls.mainPage}>
      <HeroSection />
      <div className={cls.mmrContainer}>
        <h1 id="rangeValue"></h1>
        <div className="range">
          <div className="divFill"></div>
          <div className="divLowerFill"></div>
          <input type="range" id="lox" className={`lox ${cls.firstRange}`} min="0" max="6000" step="20" value={state} onChange={(e) => add(e.target.value)} />
          <input type="range" id="pidor" className={`lox ${cls.secondRange}`} min="0" max="6000" step="20" value={state1} onChange={(e) => add1(e.target.value)} />
        </div>
        <ul className="range-labels">
          <li onClick={() => onLiClicked(0)}>0</li>
          <li onClick={() => onLiClicked(1000)}>1000</li>
          <li onClick={() => onLiClicked(2000)}> 2000</li>
          <li onClick={() => onLiClicked(3000)}>3000</li>
          <li onClick={() => onLiClicked(4000)}>4000</li>
          <li onClick={() => onLiClicked(5000)}>5000</li>
          <li onClick={() => onLiClicked(6000)}>6000</li>
        </ul>
      </div>
    </div>
  )
}

export default MainPage;