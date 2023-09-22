import React, {FC} from "react";
import cls from "./spinner.module.scss";

interface SpinnerProps{
    className?:string
}

const Spinner: FC<SpinnerProps> = ({className}) => {
    return (
        <div className={cls.ldsDualRing}></div>
    )
}

export default Spinner;