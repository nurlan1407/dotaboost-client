import React, {FC} from "react";
import cls from "./spinner.module.scss";

interface SpinnerProps{
    className?:string
}

const Spinner: FC<SpinnerProps> = ({className}) => {
    return (
        <div className={cls.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Spinner;