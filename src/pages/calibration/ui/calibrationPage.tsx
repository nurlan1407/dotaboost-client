import React from 'react';
import cls from './calibrationPage.module.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'app/providers/store/store';
import { Calibraion } from 'widgets/calibration/ui/calibration';
import { getProducts } from 'entities/products/api/productsApi';
import { InputRange } from 'widgets/inputRange/ui/inputRange';
import { addOrder, setCurrentService } from 'entities/order/model/slice';
import { DotaServices } from 'shared/config/dotaServices/dotaServices';
import Button from 'shared/ui/button/Button';
import { toggleDrawer } from 'app/providers/store/reducers/htmlStates';
import { selectProduct, setProductAmount } from 'entities/products/model/slice';
import { Order } from 'entities/order/model/types';
import { Product } from 'entities/products/types';
interface CalibrationPageProps {

};


const MAX_GAMES = 5
const MIN_GAMES = 1
const PRICE_PER_GAME = 2
const HOURS_PER_GAME = 2
const HOURS_TO_FIRST_GAME = 2


const CalibrationPage: React.FC<CalibrationPageProps> = ({ }) => {
    const dispatch = useDispatch(); 
    const {list, selectedProduct} = useAppSelector((state)=>state.productReducer)
    const [product,setProduct ]= React.useState<Product|null>(null)
    const [amoutOfGames, setAmountOfGames] = React.useState(MIN_GAMES)
    const [estimatedTime, setEstimatedTime] = React.useState(amoutOfGames === MIN_GAMES ? 2 : amoutOfGames * HOURS_PER_GAME)
    // const [estimatedPrice, setEstimatedPrice] = React.useState(amoutOfGames * PRICE_PER_GAME)


    React.useEffect(() => {
        dispatch(setCurrentService(DotaServices["Calibration"]))
        if(list.length===0){
        //  @ts-ignore
        dispatch(getProducts(3))    
        }
       
    }, [])

    const onSelectProduct = (product:Product,amount:number) =>{
        dispatch(selectProduct(product))
    }

    // console.log('rerender');
    
    return (
        <div className='page'>
            <div className='wrapper'>
                <div className={cls.calibrationContainer}>
                    <h2 className={cls.header}>Calibration</h2>
                    <div className={cls.medalBloc}>
                        <div className={cls.recomendation}>Select your previous medal</div>
                        <div className={cls.productsContainer}>
                            {list.map((item) => (
                                <div key={item.productId} className={`${cls.card} ${selectedProduct === item ? cls.active : "" }`} onClick={()=>{onSelectProduct(item,amoutOfGames)}}>
                                    <img src={item.imgUrl} className={cls.cardImg}></img>
                                    <div className={cls.cardTitle}>{item.name}</div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className={cls.amountOfGamesContainer}>
                        <div className={cls.recomendation}>Select number of the remaining low priority <br></br> games </div>
                        <div className={cls.rangeContainer}>
                            <div className={cls.inputContent}>
                                <InputRange
                                    min={MIN_GAMES}
                                    max={MAX_GAMES}
                                    step={1}
                                    value={ amoutOfGames}
                                    onValueChange={(num) => {setAmountOfGames(num)}}
                                />
                            </div>
                            <div className={cls.gameAmount}>{amoutOfGames}</div>
                        </div>
                    </div>
                    <div className={cls.estimatedPriceBlock}>
                        <div className={cls.estimatedTime}>
                            Estimated time for completion:&nbsp;&nbsp; <strong style={{ color: "#2CA8FF" }}>  {estimatedTime} hours</strong>
                        </div>
                        <div className={cls.estimatedPrice}>
                            ${selectedProduct?(selectedProduct?.price * amoutOfGames):"--"}
                        </div>
                        <Button className={cls.buyBtn} onClick={() => {
                            const newOrder:Order =  {
                                _id:null,
                                orderNumber:null, 
                                title: "Calibratioon",
                                createdAt:Date.now(),
                                product:{...selectedProduct,amount:amoutOfGames},
                                type:"countable",
                                status:"UnPayed",
                            }
                            dispatch(addOrder(newOrder))
                            dispatch(toggleDrawer(true))
                        }}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CalibrationPage;